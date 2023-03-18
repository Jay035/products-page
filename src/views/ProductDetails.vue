<template>
  <p>Product {{ $route.params.id }}</p>
</template>

<script>
import FetchProductsFromAPI from "../composables/FetchProducts";

export default {
  name: "ProductDetails",

  setup() {
    const { product, fetchProduct } = FetchProductsFromAPI();

    return { product, fetchProduct };
  },
};
</script>
