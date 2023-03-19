import { ref } from "vue";

export default function FetchProductsFromAPI() {
  const products = ref([]);
  const productsLoading = ref(true);
  const error = ref(null);

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const res = await data.json();
      products.value = res.products;
      productsLoading.value = false;
      
      if (!data.ok) {
        console.error("Error fetching data");
      }
    } catch (err) {
      error.value(err.message);
    } finally {
      console.log(products);
    }
  };

  return { error, products, productsLoading, fetchProducts };
}
