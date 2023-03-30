<template>
    <div class="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
      <!-- card-header -->
      <h1 class="text-2xl font-semibold">Create an account</h1>
      <!-- <p class="font-medium text-black/80">Let's get started</p> -->
      <div class="">
        <div v-if="store.error" class="text-red-500 font-medium">{{store.error }} !</div>
        <form @submit.prevent="store.Register" class="flex flex-col gap-4">
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
            :disabled="email === '' || password === ''"
            type="submit"
            class="w-full mt-6 bg-black disabled:bg-black/50 hover:bg-[#5A833A]/90 text-white px-4 py-2 rounded-lg"
          >
          <span v-if="!store.loading">Create account</span>
            <span v-if="store.loading"> Creating account....</span>
          </button>

          <p class="opacity-90 text-center font-medium">Or</p>

          <button
            class="flex justify-center items-center gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
            @click="signInWithGoogle"
          >
            <img v-bind:src="googleIcon" class="w-6 h-6" alt="" />
            Sign Up With Google
          </button>
        </form>
        <p class="text-center mt-10">
          Already have an account?
          <router-link to="/login" class="underline font-bold"
            >Log in</router-link
          >
        </p>
      </div>
    </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
import googleIcon from "../assets/google-icon.png";
// import FormValidation from "../composables/FormValidation";
// import {useStore} from 'vuex';
// import { computed } from "vue";
import {useFormStore} from '@/store'

export default {
  data() {
    return {
      googleIcon: googleIcon,
    };
  },
  components: {
    // NavBar,
  },

  setup() {
    const store = useFormStore();
    return {store}
    
  },
};
</script>

<style></style>
