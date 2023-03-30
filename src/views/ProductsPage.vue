<template>
  <div class="px-6 lg:px-14 py-20">
    <div
      v-if="store.loading"
      class="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
    >
      <div v-for="product in store.products" :key="product.id" class="w-full">
        <div
          class="border border-black bg-black/70 rounded-lg h-[200px] px-4 flex justify-center items-center"
        ></div>

        <div class="mt-2 tracking-tight">
          <h1
            class="capitalize text-transparent bg-[#0e0d0d]/70 mb-2 leading-7 font-semibold w-fit"
          >
            {{ product.title }}
          </h1>
          <p class="text-sm truncate text-transparent bg-[#0e0d0d]/70 mb-2">
            {{ product.description }}
          </p>
          <h3 class="text-transparent bg-[#0e0d0d]/70 w-fit">
            ${{ product.price }}
            <span class="text-transparent text-sm"
              >{{ product.discountPercentage }}% off</span
            >
          </h3>
          <button
            class="bg-[#0e0d0d]/70 text-transparent w-fit px-6 py-2 mt-2 text-sm rounded-lg rounded-br-3xl"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div v-else-if="!store.loading" class="">
      <!-- filter  -->
      <div class="flex flex-wrap gap-x-4 gap-y-1 mb-3 uppercase text-black/80">
        <!-- <div v-for="filter in filters" :key="filter.id">
          <button
            @click="() => filterCategory(filter.id)"
            :class="filter.id === activeFilter ? 'font-bold' : ''"
          >
            {{ filter.label }}
          </button>
        </div> -->
      </div>
      <!-- {{ filteredProduct }} -->
      <section
        class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div v-for="product in store.products" :key="product.id" class="w-full">
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
            <h1
              class="capitalize text-lg text-[#0e0d0d] leading-7 font-semibold"
            >
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
              @click="() => store.viewProductDetails(product.id)"
            >
              View Details
              <!-- <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
              >View Details</router-link> -->
            </button>
          </div>
        </div>
      </section>
    </div>
    <!-- <ProductDetails :product="state.product" /> -->
    <!-- <section v-else-if="state.product">
      <div
        class="border border-black bg-black/70 rounded-lg h-[200px] px-4 flex justify-center items-center"
      >
        <img
          class="w-full max-w-[180px] max-h-[180px] mx-auto object-cover"
          v-bind:src="state.product.images[0]"
          alt="preview"
        />
      </div>

      <div class="mt-2 tracking-tight">
        <span>{{ state.product.category }}</span>
        <h1 class="capitalize text-lg text-[#0e0d0d] leading-7 font-semibold">
          {{ state.product.title }}
        </h1>
        <p class="text-sm truncate">{{ state.product.description }}</p>
        <h3 class="font-semibold text-[#59833a]">
          ${{ state.product.price }}
          <span class="text-black/60 text-sm"
            >{{ state.product.discountPercentage }}% off</span
          >
        </h3>

        <div class="">
          <button>Add To Cart</button>
          <h1>
            ${{ state.product.price }}
            <span>{{ state.product.discountPercentage }}% off</span>
          </h1>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { useProductsStore } from "@/store";

export default {
  components: {
    // ProductDetails
  },
  setup() {
    const store = useProductsStore();
    return { store };
  },
};
</script>

<style></style>
