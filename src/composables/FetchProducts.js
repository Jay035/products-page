import axios from "axios";
import { onMounted, reactive, ref } from "vue";

export default function FetchProductsFromAPI() {
  const state = reactive({
    products: [],
    product: null,
  });
  const productsLoading = ref(true);
  const error = ref(null);
  const filters = ref([
    {
      id: "all",
      label: "All",
    },
    {
      id: "smartphones",
      label: "Smartphones",
    },
    {
      id: "laptops",
      label: "Laptops",
    },
    {
      id: "fragrances",
      label: "Fragrances",
    },
    {
      id: "skincare",
      label: "Skincare",
    },
    {
      id: "groceries",
      label: "Groceries",
    },
    {
      id: "home-decoration",
      label: "Home-decoration",
    },
  ]);
  const activeFilter = ref("all");
  const filteredProduct = ref([]);
  const selectedProduct = ref([]);

  onMounted(async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      productsLoading.value = true;
      state.products = response.data.products;
      setTimeout(() => {
        console.log("Hello world!");
        productsLoading.value = false;
        console.log(productsLoading.value);
      }, 2000);
      // if (!response.ok) {
      //   error.value = response.status;
      // }
    } catch (err) {
      error.value(err.message);
    } finally {
      console.log(productsLoading.value);
    }
  });

  const fetchProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      state.product = response.data;
      console.log(state.product);
    } catch (err) {
      error.value = err.message;
    } finally {
      console.log("state.product");
    }
  };

  const showProductDetails = (id) => {
    console.log(id);
    fetchProduct(id);
  };

  // function filterCategory(value) {
  // if (products.value !== null) {
  // console.log(value);
  // if (value === "all") {
  //   // console.log(products.value);
  //   return products.value;
  // } else {
  //   filteredProduct.value = computed(() => {
  //     return products.value.filter((product) => product.category === value);
  //   });
  //   console.log(filteredProduct.value.value);
  //   // // }
  //   activeFilter.value = value;
  //   products.value = filteredProduct.value.value;
  // }
  // }

  return {
    state,
    fetchProduct,
    showProductDetails,
    error,
    productsLoading,
    filters,
    activeFilter,
    filteredProduct,
    selectedProduct,
    // filterCategory,
  };
}
