<template>
  <nav
    class="flex fixed top-0 justify-between items-center w-full  py-4 px-6 text-lg"
  >
    <h1 class="font-semibold"><router-link to="/">ShopConfi</router-link></h1>
    <div
      :class="
        isMenuOpen
          ? 'flex flex-col bg-white absolute top-0 left-0 h-screen md:relative md:h-fit w-full md:w-fit'
          : 'hidden md:flex relative w-fit'
      "
      class="justify-center items-center"
    >
      <!-- close btn -->
      <div
        @click="closeMenu"
        class="text-2xl font-bold md:hidden absolute top-6 right-8 cursor-pointer w-fit"
      >
        X
      </div>
      <ul class="flex flex-col md:flex-row items-center gap-4">
        <li class="text-black" @click.prevent="closeMenu">
          <router-link to="/">HOME</router-link>
        </li>
        <!-- <li class="text-black text-lg"><router-link to="/about">ABOUT US</router-link></li> -->
        <li class="text-black" @click.prevent="closeMenu">
          <router-link to="/products">PRODUCTS</router-link>
        </li>
        <!-- <li class="text-black"><router-link to="/blog">BLOG</router-link></li> -->
        <div class="flex flex-col mt-4 gap-4 md:hidden">
          <router-link
            to="/login"
            @click.prevent="closeMenu"
            class="bg-transparent border border-black text-black px-4 py-2 rounded-lg"
            v-if="!isLoggedIn"
            >LOGIN</router-link
          >
          <router-link
            to="/signup"
            @click.prevent="closeMenu"
            class="bg-[#5A833A] text-white px-4 py-2 rounded-lg"
            v-if="!isLoggedIn"
            >SIGN UP</router-link
          >
          <button
        class="bg-[#5A833A]/50 text-black px-4 py-2 rounded-lg"
        v-if="isLoggedIn"
      >
        {{ auth.currentUser.displayName }}
      </button>
          <button
            class="bg-[#5A833A] text-white px-4 py-2 rounded-lg"
            @click="handleSignOut"
            v-if="isLoggedIn"
          >
            SIGN OUT
          </button>
        </div>
      </ul>
    </div>
    <div class="flex flex-col gap-[3px] cursor-pointer md:hidden" @click="toggleMenu">
      <span class="w-7 h-[4px] bg-black block"></span>
      <span class="w-7 h-[4px] bg-black block"></span>
      <span class="w-7 h-[4px] bg-black block"></span>
    </div>
    <div class="md:flex gap-4 hidden">
      <router-link
        to="/login"
        @click.prevent="closeMenu"
        class="bg-transparent border border-black text-black px-4 py-2 rounded-lg"
        v-if="!isLoggedIn"
        >LOGIN</router-link
      >
      <router-link
        to="/signup"
        @click.prevent="closeMenu"
        class="bg-[#5A833A] text-white px-4 py-2 rounded-lg"
        v-if="!isLoggedIn"
        >SIGN UP</router-link
      >
      <button
        class="bg-[#5A833A]/50 text-white px-4 py-2 rounded-lg"
        v-if="isLoggedIn"
      >
        {{ auth.currentUser.displayName }}
      </button>
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
const isMenuOpen = ref(false);
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

const toggleMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

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
