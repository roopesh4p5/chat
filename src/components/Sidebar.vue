<script setup>
import {
  capitalize,
  ref,
  watchEffect,
} from 'vue';

import {
  doc,
  onSnapshot,
} from 'firebase/firestore';

import Placeholder from '../assets/Placeholder.png';
import { db } from '../firebaseConfig';

const lastMessage = ref([]);
const props = defineProps({
    active: {
        type: Boolean
    },
    currentUserId: {
        type: String
    },
    userId: {
        type: String
    },
    username: {
        type: String
    },
    avatar: {
        type: String
    },
    contact: {
        type: Object
    }
});

const stopRunning = watchEffect(() => {
    const id = props.currentUserId > props.userId ? `${props.currentUserId + props.userId}` : `${props.userId + props.currentUserId}`;
    let unsubscribe = onSnapshot(doc(db, "lastMessage", id), (doc) => {
        lastMessage.value = { ...doc.data(), id: doc.id };
    });
    return () => unsubscribe();
});
stopRunning();
</script>

<template>
    <div @click="$emit('changeChat', props.id, props.username, props.avatar, props.contact)"
        class="flex items-center p-3 space-x-3 hover:bg-gray-100 cursor-pointer border-b min-h-[4rem]">
        <!-- Avatar Section -->
        <div class="relative flex-shrink-0">
            <img v-if="props.avatar" 
                class="h-12 w-12 rounded-full object-cover" 
                :src="props.avatar"
                :alt="props.username" 
            />
            <img v-else 
                class="h-12 w-12 rounded-full object-cover" 
                :src="Placeholder" 
                :alt="props.username" 
            />
            <span 
                class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                :class="props.active ? 'bg-green-400' : 'bg-red-400'"
            ></span>
        </div>

        <!-- Content Section -->
        <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start">
                <p class="text-sm font-medium text-gray-900 truncate">
                    {{ capitalize(props.username) }}
                </p>
                <span v-if="lastMessage?.createdAt" class="text-xs text-gray-500">
                    <timeago :datetime="lastMessage.createdAt?.toDate()" :auto-update="60"></timeago>
                </span>
            </div>

            <div class="mt-1">
                <div v-if="lastMessage?.text" class="flex justify-between items-center">
                    <div class="flex items-center space-x-1 max-w-[80%]">
                        <span v-if="lastMessage.from === currentUserId" 
                            class="text-xs text-gray-500">Me:</span>
                        <p class="text-xs text-gray-500 truncate">
                            {{ lastMessage?.text }}
                        </p>
                    </div>
                    
                    <div class="flex-shrink-0">
                        <div v-if="lastMessage?.unread && lastMessage?.from !== currentUserId"
                            class="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full">
                            <span class="text-xs text-white">1</span>
                        </div>
                        <span v-else class="text-blue-500 text-xs">
                            <i class="fa fa-check"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
