<template>
  <NavBar />
  <div class="px-6">
    <h1>ProductsPage</h1>
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
    <section class="grid grid-cols-2 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="w-full "
      >
        <div class="border border-black h-[200px] flex justify-center items-center">
          <img class="w-full max-w-[240px] mx-auto object-cover" v-bind:src="product.images[1]" alt="preview" />
        </div>
        
        <!-- <div class="" v-for="image in product.images" :key="image.id">
        <img v-bind:src="image" alt="preview" />
      </div> -->
        <div class="">
          <span>{{ product.category }}</span>
          <h1
            class="capitalize text-2xl md:text-3xl text-[#59833a] font-semibold"
          >
            {{ product.title }}
          </h1>
          <p>{{ product.description }}</p>
          <h1>
            ${{ product.price }}
            <span>{{ product.discountPercentage }}% off</span>
          </h1>
          <router-link
            :to="{ name: 'ProductDetails', params: { id: product.id } }"
            >View Details</router-link
          >
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

    return { products, fetchProducts };
  },
};
</script>

<style></style>
