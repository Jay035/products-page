<template>
  <NavBar />
  <div v-if="productsLoading" class="">
        Loading</div>
  <div class="px-6 mt-20">
    <!-- <h1>ProductsPage</h1> -->
    <!-- filter  -->
    <div class="flex flex-wrap gap-x-4 gap-y-1 mb-3 uppercase text-black/80">
      <button class="font-bold">All</button>
      <button>Smartphones</button>
      <button>Laptops</button>
      <button>Fragrances</button>
      <button>Skincare</button>
      <button>Groceries</button>
      <button>Home-decoration</button>
    </div>
    <section class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
      <div v-for="product in products" :key="product.id" class="w-full">
        <div
          class="border border-black bg-black/70 rounded-lg h-[200px] px-4 flex justify-center items-center"
        >
          <img
            class="w-full max-w-[180px] max-h-[180px] mx-auto object-cover"
            v-bind:src="product.images[0]"
            alt="preview"
          />
        </div>

        <div v-if="error" class="text-red-500 font-medium">
          {{ error }}
        </div>

        <div class="mt-2 tracking-tight">
          <!-- <span>{{ product.category }}</span> -->
          <h1 class="capitalize text-lg text-[#0e0d0d] leading-7 font-semibold">
            {{ product.title }}
          </h1>
          <p class="text-sm truncate">{{ product.description }}</p>
          <h3 class="font-semibold text-[#59833a]">
            ${{ product.price }}
            <span class="text-black/60 text-sm"
              >{{ product.discountPercentage }}% off</span
            >
          </h3>
          <button
            class="bg-[#5A833A] hover:bg-[#5A833A]/80 shadow-lg shadow-[#5A833A]/50 w-fit text-white px-4 py-2 mt-2 text-sm rounded-lg rounded-br-3xl"
          >
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
              >View Details</router-link
            >
          </button>
          <!-- <div class="">
          <button>Add To Cart</button>
          <h1>${{product.price}} <span>{{ product.discountPercentage }}% off</span></h1>
        </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FetchProductsFromAPI from "../composables/FetchProducts";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    const { products, fetchProducts } = FetchProductsFromAPI();
    fetchProducts();

    return { products, fetchProducts };
  },
};
</script>

<style></style>
