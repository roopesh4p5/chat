<script setup>
import {
  computed,
  reactive,
  ref,
  watchEffect,
} from 'vue';

import { useRouter } from 'vue-router';

import useVuelidate from '@vuelidate/core';
import {
  email,
  helpers,
  minLength,
  required,
} from '@vuelidate/validators';

import Logo from '../assets/Logo.webp';
import { useAuthStore } from '../store/authStore';

const formData = reactive({
    email: "",
    username: "",
    password: ""
});
const router = useRouter();
const authStore = useAuthStore();
const loading = ref(false);
const token = ref("");
const error = ref("")

watchEffect(() => {
    token.value = authStore.userData;
    loading.value = authStore.loginLoading;
    error.value = authStore.loginError;
    if( token.value ) {
        router.push("/chat")
    }
});

const rules = computed(() => {
    return {
        email: { required: helpers.withMessage("Email is required", required), email },
        username: { required: helpers.withMessage("Username is required", required)},
        password: { required: helpers.withMessage("Password is required", required), minLength: minLength(8) },
    }
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
    const result = await v$.value.$validate();
    if( result ) {
       authStore.loginUser(formData.email, formData.password)
    }

    setTimeout(() => {
        error.value = "";
        loading.value = ""
    }, 2000);
}
</script>
<template>
    <div class="grid-center">
        <div class="max-w-sm w-72 mt-6 md:w-80 md:mt-10">
            <form @submit.prevent="handleSubmit" class="w-full shadow-md rounded-md py-4 px-6 ">
                <div class="flex items-center justify-center m-4">
                    <img :src="Logo" alt="Logo" class="w-10 h-10"><h2 class="text-xl pl-3 ">Pace Chats</h2>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="username" class=" w-full text-black">Username</label>
                    <input type="text" placeholder="Username" class="form-input text-black" v-model="formData.username"/>
                    <p class="error" v-if="v$.username.$error">{{v$.username.$errors[0].$message}}</p>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="email" class=" w-full text-black">Email</label>
                    <input type="email" placeholder="yourname@pacewisdom.com" class="form-input text-black" v-model="formData.email" />
                    <p class="error" v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
                </div>

                <div class="pb-2 sm:pb-3">
                    <label for="password" class=" w-full text-black">Password</label>
                    <input type="password" placeholder="Password" class="form-input text-black" v-model="formData.password"/>
                    <p class="error" v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</p>
                </div>

                <div>
                    <p class="error">{{ error }}</p>
                </div>

                <div class="pb-2">
                    <p class="text-black">Please <span class="text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"><router-link to="/register">Register</router-link></span> with your Account first </p>
                </div>

                <div>
                    <button type="submit" class="form-btn">
                        {{ loading ? "Signing In..." : "Sign In"}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>