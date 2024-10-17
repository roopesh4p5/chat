<script setup>
import {
  ref,
  watchEffect,
} from 'vue';

import Logo from '../assets/Logo.webp';
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();
const token = ref("");
watchEffect(() => {
    token.value = authStore.userData;
});
</script>
    <template>
    <div>
        <header>
            <nav class="w-full h-16 flex-between p-2  ">
                <div class="flex p-3">
                    <img :src="Logo" alt="Logo" class="w-10 h-10">
                    <h2 class="ml-6  flex items-center text-xl">Pace Chats</h2>
                </div>
            </nav>
        </header>
    </div>
</template>