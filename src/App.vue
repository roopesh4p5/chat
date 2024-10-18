<script setup>
import {
  onMounted,
  ref,
  watchEffect,
} from 'vue';

import Navbar from './components/Navbar.vue';
import UpdatePrompt from './components/UpdatePrompt.vue';
import { useAuthStore } from './store/authStore';

const authStore = useAuthStore();
const token = ref("");
const isOnline = ref(navigator.onLine);

watchEffect(() => {
  token.value = authStore.userData;
});

// Handle online/offline status
const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine;
};

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  
  // Add beforeinstallprompt handler for install button
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    // Store the event for later use
    window.deferredPrompt = e;
  });

  // Return clean up function
  return () => {
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  };
});
</script>

<template>
  <div class="app-container">
    <!-- Offline indicator -->
    <div v-if="!isOnline" class="offline-banner">
      You are currently offline. Some features may be limited.
    </div>

    <!-- <Navbar v-if="!token"/> -->
    
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- PWA Update Prompt -->
    <UpdatePrompt />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  position: relative;
}

.offline-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FFA000;
  color: white;
  text-align: center;
  padding: 8px;
  z-index: 1000;
  animation: slideDown 0.3s ease-out;
}

/* Existing transition styles */
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

/* Add offline banner animation */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>