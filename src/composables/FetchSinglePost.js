import { ref } from "vue";

export default function FetchProductFromAPI(id) {
  const product = ref(null);
  const productLoading = ref(true);
  const error = ref(null);

  const fetchProduct = async () => {
    try {
      let data = await fetch("https://dummyjson.com/products/" + id);
      if(!data.ok){
        throw Error("No data available")
      }
      const res = await data.json();
      product.value = res;
      productLoading.value = false;
      console.log(data.products);
    } catch (err) {
      error.value = err.message;
    } finally {
      console.log(product);
    }
  };

  return { error, product, productLoading, fetchProduct };
}
