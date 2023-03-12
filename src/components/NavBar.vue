<template>
  <nav class="flex justify-between items-center py-4 px-6 text-lg">
    <h1>LOGO</h1>
    <ul class="flex justify-between items-center gap-4">
      <li class="text-black"><router-link to="/">HOME</router-link></li>
      <!-- <li class="text-black text-lg"><router-link to="/about">ABOUT US</router-link></li> -->
      <li class="text-black">
        <router-link to="/products">PRODUCTS</router-link>
      </li>
      <!-- <li class="text-black"><router-link to="/blog">BLOG</router-link></li> -->
    </ul>
    <div class="flex gap-4">
      <router-link
        to="/login"
        class="bg-transparent border border-black text-black px-4 py-2 rounded-lg"
        v-if="!isLoggedIn"
        >LOGIN</router-link
      >
      <router-link
        to="/register"
        class="bg-[#5A833A] text-white px-4 py-2 rounded-lg"
        v-if="!isLoggedIn"
        >SIGN UP</router-link
      >
      <button
        class="bg-[#5A833A] text-white px-4 py-2 rounded-lg"
        @click="handleSignOut"
        v-if="isLoggedIn"
      >
        SIGN OUT
      </button>
    </div>
  </nav>
</template>

<script setup>
import { auth } from "@/firebaseConfig";
import { useRouter } from "vue-router";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { ref, onMounted } from "vue";

const isLoggedIn = ref(false);
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};

// export default {
//   name: "NavBar",
//   props: {},
// };
</script>

<style></style>
