<script setup>
import {
  computed,
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
  ArrowLeftOnRectangleIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/solid';

import Robot from '../assets/new.png';
import Placeholder from '../assets/Placeholder.png';
import ChatHeader from '../components/ChatHeader.vue';
import MessageContainer from '../components/MessageContainer.vue';
import MessageInput from '../components/MessageInput.vue';
import Sidebar from '../components/Sidebar.vue';
import {
  auth,
  db,
} from '../firebaseConfig';
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore()
const router = useRouter();
const currentUser = auth.currentUser.uid;
const users = ref([]);
const user = ref([]);
const search = ref("");
const selectedUser = ref("")
const messagesContainer = ref([]);
const contactContainer = ref([]);
const myprofile = sessionStorage.getItem('userEmail');
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
    // all the conversation between the currentUser and the selectedUser will be stored in this id
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

    // we get the last messages between the currentUser and the selectedUser
    const docSnap = await getDoc(doc(db, "lastMessage", id));
    // if the last message is not from the currentUser the unread will be false
    if (docSnap.data() && docSnap.data().from !== currentUser) {
        // update last message document and set unread to false
        await updateDoc(doc(db, "lastMessage", id), {
            unread: false
        });
    }
};

const filteredUsers = computed(() => {
    return users.value.filter((user) => user.username.toLowerCase().includes(search.value.toLowerCase()))
})


const handleLogOut = async () => {
    await updateDoc(doc(db, "users", currentUser), {
        online: false,
        createdAt: Timestamp.fromDate(new Date()),
    });
    authStore.logOut();
    router.push("/login");
}
</script>
<template>
    <!-- component -->
    <div>
        <div class="m-2 text-black ">
            <div class="h-[calc(100vh-5rem)]">
                <div class="flex rounded h-full  ">

                    <!-- Left -->
                    <div class="w-1/3 mr-1 max-w-[25rem] flex flex-col border shadow-lg">

                        <!-- Header -->
                        <div class="py-2 px-3 h-20 bg-grey-lighter flex flex-row justify-between items-center">
                           <div class="flex justify-center items-center">
                          
                            <p>{{myprofile}}</p>
                           </div>

                            <div class="flex">
                                <ArrowLeftOnRectangleIcon @click="handleLogOut()"
                                    class="w-6 h-6 cursor-pointer text-black" />
                            </div>
                        </div>

                        <!-- Search -->

                        <form>
                            <label for="default-search"
                                class="mb-2 text-sm font-medium text-black-900 sr-only">Search</label>
                            <div class="relative ml-2 hidden lg:block">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <MagnifyingGlassIcon class="w-6 h-6 text-gray-500" />
                                </div>
                                <input type="search" id="default-search" v-model="search"
                                    class="appearance-none block py-2 px-2 pl-10 w-80 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 mb-2 border border-gray-900  text-black xl:w-96"
                                    placeholder="Search or start new chat" required>
                            </div>
                        </form>


                        <!-- Contacts -->
                        <div class="bg-grey-lighter overflow-auto max-w-96 min-w-96" v-for="contact in filteredUsers">
                            <Sidebar :active="contact.online" :currentUserId="currentUser" :contact=contact :userId="contact.uid"
                                :avatar="contact.avatar" :username="contact.username" @changeChat="selectUser" />
                        </div>

                    </div>


                    <!-- Right -->
                    <div v-if="contactContainer.uid"
                        class="w-4/5 flex flex-col border shadow-lg">
                        <!-- Header -->
                        <div class="py-2 px-3 bg-grey-lighter border-b-2 flex flex-row justify-between items-center">
                            <ChatHeader :chatUsername="contactContainer.username" :chatAvatar="contactContainer.avatar"
                                :chatTimestamp="contactContainer.createdAt" :chatOnline="contactContainer.online" />
                            <div class="flex-center space-x-2">
                                <div class="hidden md:inline">
                                    <MagnifyingGlassIcon class="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <EllipsisVerticalIcon class="w-6 h-6 text-gray-300" />
                                </div>
                            </div>
                        </div>

                        <!-- Messages -->
                        <div class="flex-1 bg-slate-100 overflow-auto">
                            <div v-for="messages in messagesContainer">
                                <MessageContainer :messages="messages" :currentUserId="currentUser" />
                            </div>
                        </div>

                        <!-- Input -->
                        <div v-if="contactContainer.uid" class="border">
                            <MessageInput :contactId="contactContainer.uid" :currentUserId="currentUser" />
                        </div>
                    </div>

                    <div v-else class="grid place-items-center w-full">
                        <img :src="Robot" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>