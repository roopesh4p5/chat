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
  sameAs,
} from '@vuelidate/validators';

import Logo from '../assets/Logo.webp';
import { useAuthStore } from '../store/authStore';

const formData = reactive({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
});
const router = useRouter();
const authStore = useAuthStore();
const loading = ref(false);
const token = ref("");
const error = ref("");
watchEffect(() => {
    token.value = authStore.userData;
    loading.value = authStore.registerLoading;
    error.value = authStore.registerError;
    if( token.value ) {
        router.push("/profile")
    }
});

const paceWisdomEmailValidator = (value) => {
    return /^[a-zA-Z0-9._%+-]+@pacewisdom\.com$/.test(value);
};

const rules = computed(() => {
    return {
        email: { 
            required: helpers.withMessage("Email is required", required), 
            email: helpers.withMessage("Invalid email format", email),
            paceWisdomEmail: helpers.withMessage("Email Address must contain Company Domain", paceWisdomEmailValidator)
        },
        username: { required: helpers.withMessage("Username is required", required)},
        password: { required: helpers.withMessage("Password is required", required), minLength: minLength(8) },
        confirmPassword: { required: helpers.withMessage("Passwords do not match", required), sameAs: sameAs(formData.password) },
    }
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    await authStore.registerUser(formData.username, formData.email, formData.password);
    // Navigate after successful registration
    if (authStore.user) {
      router.push('/profile');
    }
  }
};
</script>
<template>
    <div class="grid-center">
        <div class="max-w-lg w-96 mt-4 md:w-80 md:mt-6">
            <form @submit.prevent="handleSubmit()" class="w-full shadow-md  rounded-md py-4 px-6 ">
                <div class="flex items-center justify-center m-4">
                    <img :src="Logo" alt="Logo" class="w-10 h-10"><h2 class="text-xl pl-3 ">Pace Chats</h2>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="username" class="form-label text-black">Username</label>
                    <input type="text" placeholder="Username" class="form-input text-black" v-model="formData.username"/>
                    <p class="error" v-if="v$.username.$error">{{v$.username.$errors[0].$message}}</p>
                </div>

                <div class="pb-3 sm:pb-4">
                    <label for="email" class="form-label text-black">Email</label>
                    <input type="email" placeholder="yourname@pacewisdom.com" class="form-input text-black" v-model="formData.email"/>
                    <p class="error" v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
                </div>

                <div class="pb-2 sm:pb-3">
                    <label for="password" class="form-label text-black">Password</label>
                    <input type="password" placeholder="Password" class="form-input text-black" v-model="formData.password"/>
                    <p class="error" v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</p>
                </div>

                <div class="pb-2 sm:pb-3">
                    <label for="password" class="form-label text-black">ConfirmPassword</label>
                    <input type="password" placeholder="Password" class="form-input text-black" v-model="formData.confirmPassword"/>
                    <p class="error" v-if="v$.confirmPassword.$error">{{v$.confirmPassword.$errors[0].$message}}</p>
                </div>

                
                <div>
                    <button type="submit" class="form-btn">
                        {{ loading ? "Signing Up..." : "Sign Up"}}
                    </button>
                </div>
                <div class="py-5">
                    <p class="text-black">Already Registered? <span class="text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"><router-link to="/">Login</router-link></span> </p>
                </div>
            </form>
        </div>
    </div>
</template>