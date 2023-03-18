import { ref } from "vue";

export default function FetchProductsFromAPI() {
  let product = ref("");
  const fetchProduct = async (id) => {
    try {
      let data = await fetch("https://dummyjson.com/products/" + id);
      if(!data.ok){
        throw Error("No data available")
      }
      product.value = data.json().products;
      console.log(data.products);
        // .then((res) => res.json())
        // .then((data) => {
        //   product.value = data.products;
        //   console.log(data.products);
        // });
    } catch (err) {
      product.value = err.message;
    } finally {
      console.log(product);
    }
  };
  fetchProduct();

  return { product, fetchProduct };
}
