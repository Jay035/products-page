<template>
  <div>
    <NavBar />
    <HeroSection />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomePage",
  components: {
    HeroSection,
    NavBar
  },
};
</script>

<style></style>
