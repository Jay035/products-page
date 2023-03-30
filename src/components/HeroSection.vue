<template>
  <section class="bg-[#fbead2] flex h-screen px-6 ">
    <div class="flex flex-col items-center justify-center gap-6 lg:gap-8 text-center max-w-3xl mx-auto">
      <h1 class="text-3xl md:text-4xl lg:text-6xl">
        Shop Smarter, Not Harder:
        <span class="text-[#59833a] font-semibold">ShopConfi</span> Has
        Everything You Need
      </h1>
      <p class="font-normal md:text-lg lg:text-xl">
        ShopConfi is your one-stop-shop for all things gadgets, decor, skin-care
        products, groceries and fragrances. With a wide variety of products
        available, customers can find the perfect item, for
        themselves or as a gift for someone special.
      </p>
      <button
        class="bg-[#5A833A] shadow-lg shadow-[#5A833A]/50 w-fit text-white px-4 py-3 rounded-lg rounded-br-3xl"
      >
        <router-link to="/products"> Shop Now ></router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {},
};
</script>

<style></style>
