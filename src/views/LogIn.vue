<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
      <div class="">
        <h1 class="text-2xl font-semibold">Hey, hello !emoji</h1>
        <p>Enter the information you entered while registering</p>
      </div>

      <div class="">
        <div v-if="store.error" class="text-red-500 font-medium">
          {{ store.error }}
        </div>

        <form action="#" @submit.prevent="store.logIn" class="flex flex-col gap-4">
          <div class="flex flex-col">
            <label for="email" class="">Email</label>

            <input
              id="email"
              type="email"
              class="border outline-black border-black/80 rounded-lg px-2 py-1"
              name="email"
              value
              required
              v-model="store.email"
            />
          </div>

          <div class="flex flex-col">
            <label for="password" class="">Password</label>

            <input
              id="password"
              type="password"
              class="border outline-black border-black/80 rounded-lg px-2 py-1"
              name="password"
              required
              v-model="store.password"
            />
          </div>

          <button
            :disabled="store.email === '' || store.password === ''"
            type="submit"
            class="w-full font-medium mt-6 bg-black disabled:bg-black/50 hover:bg-[#5A833A]/90 text-white px-4 py-2 rounded-lg"
          >
            <span v-if="!store.loading">Login</span>
            <span v-if="store.loading">Logging in....</span>
          </button>

          <p class="opacity-90 text-center font-normal">Or</p>

          <button
            class="w-full flex justify-center items-center gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
            @click="store.signInWithGoogle"
          >
            <img v-bind:src="googleIcon" class="w-6 h-6" alt="" />
            Login with Google
          </button>
        </form>

        <p class="text-center mt-10">
          Don't have an account?
          <router-link to="/signup" class="underline font-bold"
            >Sign up</router-link
          >
        </p>
      </div>
  </div>
</template>

<script>
import { useFormStore } from "@/store";
import googleIcon from "../assets/google-icon.png";

export default {
  data() {
    return {
      googleIcon: googleIcon,
    };
  },
  components: {
  },

  setup() {
    const store = useFormStore();
    return {store}
    
  },
};
</script>

<style></style>
