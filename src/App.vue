<template>
  <NavBar />
  <main class="py-4 px-6">

    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
