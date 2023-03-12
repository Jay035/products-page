<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
            type="submit"
            class="w-full mt-6 bg-black hover:bg-[#5A833A]/90 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>

          <p class="opacity-90 text-center font-medium">Or</p>

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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { auth } from "@/firebaseConfig";
import googleIcon from "../assets/google-icon.png";

const email = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();

const logIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("successfully signed in");
    console.log(auth.currentUser);
    router.push("/");
  } catch (err) {
    console.log(err.code);
    switch (err.code) {
      case "auth/invalid-email":
        error.value = "Invalid email";
        break;
      case "auth/user-not-found":
        error.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        error.value = "Incorrect password";
        break;
      default:
        error.value = "Incorrect email or password";
        break;
    }
  }
};

const signInWithGoogle = async () => {
  try {
    const provider = await new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<style></style>
