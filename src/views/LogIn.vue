<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NavBar />
  <div class="container mt-8 max-w-lg mx-auto">
    <div class="flex flex-col gap-3 w-full">
      <div class="">
        <h1 class="text-2xl font-semibold">Hey, hello !emoji</h1>
        <p>Enter the information you entered while registering</p>
      </div>

      <div class="">
        <div v-if="error" class="text-red-500 font-medium">
          {{ error }}
        </div>

        <form action="#" @submit.prevent="logIn" class="flex flex-col gap-4">
          <div class="flex flex-col">
            <label for="email" class="">Email</label>

            <input
              id="email"
              type="email"
              class="border outline-black border-black/80 rounded-lg px-2 py-1"
              name="email"
              value
              required
              autofocus
              v-model="email"
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
              v-model="password"
            />
          </div>

          <button
            :disabled="email === '' || password === ''"
            type="submit"
            class="w-full font-medium mt-6 bg-black disabled:bg-black/50 hover:bg-[#5A833A]/90 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>

          <p class="opacity-90 text-center font-normal">Or</p>

          <button
            class="w-full flex justify-center items-center gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
            @click="signInWithGoogle"
          >
            <img v-bind:src="googleIcon" class="w-6 h-6" alt="" />
            Login with Google
          </button>
        </form>

        <p class="text-center mt-10">
          Don't have an account?
          <router-link to="/register" class="underline font-bold"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import googleIcon from "../assets/google-icon.png";
import NavBar from "../components/NavBar.vue";
import FormValidation from "../composables/FormValidation";

export default {
  data() {
    return {
      googleIcon: googleIcon,
    };
  },
  components: {
    NavBar,
  },

  setup() {
    const { logIn, email, password, error, signInWithGoogle } = FormValidation();

    return { logIn, email, password, error, signInWithGoogle };
  },
};
</script>

<style></style>
