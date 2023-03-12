<template>
  <div class="container mt-8">
    <div class="flex flex-col gap-3 w-full">
      <!-- card-header -->
      <h1 class="text-2xl font-semibold">Create an account</h1>
      <!-- <p class="font-medium text-black/80">Let's get started</p> -->
      <div class="">
        <div v-if="error" class="text-red-500 font-medium">{{ error }} !</div>
        <form action="#" @submit.prevent="Register" class="flex flex-col gap-4">
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
            Create account
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "@/firebaseConfig";
import googleIcon from "../assets/google-icon.png";

const email = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();

const Register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("successfully registered");
    console.log(auth.currentUser);
    router.push("/");
  } catch (err) {
    error.value = err.message;
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
