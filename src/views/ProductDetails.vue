<template>
  <div class="px-6 mt-44">Product details {{ store.product.id }}</div>
  <!-- {{ $this.routes.params.id }} -->
  <!-- <div v-if="error" class="text-red-500 font-medium">
    {{ error }} {{ routes.params.id }}
  </div>
  <div v-if="productLoading" class="">Loading</div>
  <div v-if="product !== null" class="px-6 mt-20">
    <p>Product {{ product.id }}</p>
    <div
      class="border border-black bg-black/70 rounded-lg h-[200px] px-4 flex justify-center items-center"
    >
      <img
        class="w-full max-w-[180px] max-h-[180px] mx-auto object-cover"
        v-bind:src="product.images[0]"
        alt="preview"
      />
    </div>

    <div class="mt-2 tracking-tight">
      <span>{{ product.category }}</span>
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
      
      <div class="">
          <button>Add To Cart</button>
          <h1>${{product.price}} <span>{{ product.discountPercentage }}% off</span></h1>
        </div>
    </div>
  </div> -->
</template>

<script>
import { useProductsStore } from "@/store";

export default {
  name: "ProductDetails",
  components: {
  },
  // prop: {
  //   product: {
  //     type: Array
  //   },
  // },
  setup() {
    const store = useProductsStore();
    return {store}
    
  },
};
</script>
