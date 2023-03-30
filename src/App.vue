<template>
  <NavBar />
  <main class="bg-[#fbead2] h-screen">
    <router-view />
    <Footer />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style></style>
