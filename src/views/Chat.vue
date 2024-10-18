<script setup>
import {
  computed,
  onMounted,
  ref,
  watchEffect,
} from 'vue';

import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useRouter } from 'vue-router';

import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/solid';

import Robot from '../assets/new.png';
import Placeholder from '../assets/Placeholder.png';
import ChatHeader from '../components/ChatHeader.vue';
import MessageContainer from '../components/MessageContainer.vue';
import MessageInput from '../components/MessageInput.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import {
  auth,
  db,
} from '../firebaseConfig';
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();
const router = useRouter();
const currentUser = auth.currentUser.uid;
const users = ref([]);
const user = ref([]);
const search = ref("");
const selectedUser = ref("");
const messagesContainer = ref([]);
const contactContainer = ref({});
const myprofile = sessionStorage.getItem('userEmail');
const showMobileChat = ref(false);
const isMobile = ref(false);

const updateWindowWidth = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
});

watchEffect(() => {
  const userReference = collection(db, "users");
  const q = query(userReference, where("uid", "not-in", [currentUser]));
  const unsub = onSnapshot(q, querySnapshot => {
    let userContacts = [];
    querySnapshot.forEach(doc => {
      userContacts.push({ ...doc.data(), id: doc.id })
    });
    users.value = userContacts;
  });
  return () => unsub();
});

watchEffect(() => {
  getDoc(doc(db, "users", currentUser)).then((docSnap) => {
    if (docSnap.exists()) {
      user.value.push(docSnap.data());
    }
  })
});

const selectUser = async (userId, username, avatar, contact) => {
  contactContainer.value = contact;
  selectedUser.value = contactContainer.value.uid;
  showMobileChat.value = true;
  
  const id = currentUser > selectedUser.value ? `${currentUser + selectedUser.value}` : `${selectedUser.value + currentUser}`;
  const messagesReference = collection(db, "messages", id, "chat");
  const q = query(messagesReference, orderBy("createdAt", "asc"));
  onSnapshot(q, querySnapshot => {
    let messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
    messagesContainer.value = messages;
  });

  const docSnap = await getDoc(doc(db, "lastMessage", id));
  if (docSnap.data() && docSnap.data().from !== currentUser) {
    await updateDoc(doc(db, "lastMessage", id), {
      unread: false
    });
  }
};

const goBackToContacts = () => {
  showMobileChat.value = false;
  contactContainer.value = {};
};

const filteredUsers = computed(() => {
  return users.value.filter((user) => user.username.toLowerCase().includes(search.value.toLowerCase()))
});

const handleLogOut = async () => {
  await updateDoc(doc(db, "users", currentUser), {
    online: false,
    createdAt: Timestamp.fromDate(new Date()),
  });
  authStore.logOut();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
</script>

<template>
    <!-- <Navbar v-if="!token"/> -->

  <div class="m-2 text-black">
    <div class="h-[calc(99vh)]">
      <div class="flex justify-center rounded h-full relative">
        <!-- Contacts List -->
        <div :class="{
          'flex flex-col border shadow-lg': true,
          'w-1/3 mr-1 max-w-[25rem]': !isMobile,
          'w-[100vw]': isMobile,
          'hidden': isMobile && showMobileChat}">
          <!-- Header -->
          <div class="py-2 px-3 h-20 bg-grey-lighter flex flex-row justify-between items-center">
            <div class="flex justify-center items-center">
              <p>{{ myprofile }}</p>
            </div>
            <div class="flex">
              <ArrowLeftOnRectangleIcon 
                @click="handleLogOut"
                class="w-6 h-6 cursor-pointer text-black" 
              />
            </div>
          </div>

          <!-- Search -->
          <div class="p-2">
            <div class="relative">
              <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="search"
                v-model="search"
                class="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search contacts"
              >
            </div>
          </div>

          <!-- Contacts -->
          <div class="flex-1 overflow-y-auto">
            <div v-for="contact in filteredUsers" :key="contact.uid">
              <Sidebar 
                :active="contact.online"
                :currentUserId="currentUser"
                :contact="contact"
                :userId="contact.uid"
                :avatar="contact.avatar"
                :username="contact.username"
                @changeChat="selectUser"
              />
            </div>
          </div>
        </div>

        <!-- Chat Area -->
        <div
          v-if="contactContainer.uid"
          :class="{
            'flex flex-col border shadow-lg': true,
            'w-2/3': !isMobile,
            'w-full absolute inset-0 bg-white': isMobile && showMobileChat
          }" >
          <!-- Chat Header -->
          <div class="py-2 px-3 bg-grey-lighter border-b flex items-center">
            <button 
              v-if="isMobile"
              @click="goBackToContacts"
              class="mr-2"
            >
              <ArrowLeftIcon class="w-6 h-6" />
            </button>
            
            <ChatHeader 
              :chatUsername="contactContainer.username"
              :chatAvatar="contactContainer.avatar"
              :chatTimestamp="contactContainer.createdAt"
              :chatOnline="contactContainer.online"
            />
            
            <div class="ml-auto flex items-center space-x-2">
              <MagnifyingGlassIcon class="w-5 h-5 text-gray-500" />
              <EllipsisVerticalIcon class="w-6 h-6 text-gray-500" />
            </div>
          </div>

          <!-- Messages Area -->
          <div class="flex-1 bg-gray-100 overflow-y-auto p-4">
            <div v-for="message in messagesContainer" :key="message.id">
              <MessageContainer 
                :messages="message"
                :currentUserId="currentUser"
              />
            </div>
          </div>

          <!-- Input Area -->
          <MessageInput 
            :contactId="contactContainer.uid"
            :currentUserId="currentUser"
          />
        </div>

        <!-- Welcome Screen -->
        <div
          v-else
          :class="{
            'grid place-items-center bg-gray-50': true,
            'w-2/3': !isMobile,
            'hidden': isMobile && showMobileChat,
            'hidden': isMobile
          }"
        >
          <img :src="Robot" alt="Welcome" class="max-w-md w-full">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-transition {
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .mobile-slide-enter-active,
  .mobile-slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }

  .mobile-slide-enter-from,
  .mobile-slide-leave-to {
    transform: translateX(100%);
  }
}
</style>