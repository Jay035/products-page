import { ref } from "vue";

export default function FetchProductsFromAPI() {
  let products = ref("");
  const fetchProducts = () => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          products.value = data.products;
          // console.log(data.products);
        });
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log(products);
    }
  };
  fetchProducts();

  return { products, fetchProducts };
}
