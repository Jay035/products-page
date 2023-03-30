import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { auth, provider } from "./firebaseConfig";

const store = defineStore({
  state: reactive({
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
    user: {
      loggedIn: false,
      data: null,
    },
    products: {
      data: [],
      loading: true,
    },
    product: {
      data: [],
      loading: true,
    },
    formValidating: false,
  }),
  // getters: {
  //   user(state) {
  //     return state.user;
  //   },
  // },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_PRODUCTS(state, data) {
      state.products.data = data;
    },
    SET_PRODUCT(state, data) {
      state.product.data = data;
    },
  },
  actions: {
    async register(context, { email, password, name }) {
      this.state.formValidating = true;
      this.state.error = null;

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(email, password);
      try {
        context.commit("SET_USER", response.user);
        response.user.updateProfile({ displayName: name });
        console.log(response.user.displayName);
      } catch (err) {
        console.log(err.message);
        throw new Error("Unable to register user");
      }
      this.state.formValidating = false;
    },

    async logIn(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("Login failed");
      }
    },

    async logOut(context) {
      await signOut(auth);
      context.commit("SET_USER", null);
    },

    // async fetchUser(context, user) {
    //   context.commit("SET_LOGGED_IN", user !== null);
    //   if (user) {
    //     context.commit("SET_USER", {
    //       displayName: user.displayName,
    //       email: user.email,
    //     });
    //   } else {
    //     context.commit("SET_USER", null);
    //   }
    // },
  },
});

// export the store
export default store;

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const product = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      // productsLoading.value = true;
      products.value = response.data.products;
      setTimeout(() => {
        console.log("Hello world!");
        loading.value = false;
      }, 2000);
    } catch (err) {
      error.value(err.message);
    } finally {
      console.log(loading.value);
    }
  };
  fetchProducts();

  const fetchProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      product.value = response.data;
      console.log(product.value);
    } catch (err) {
      error.value = err.message;
    } finally {
      console.log(product);
    }
  };

  const viewProductDetails = (id) => {
    console.log("viewProductDetails");
    fetchProduct(id);
    router.push(`/products/${id}`)
  }

  return { products, product, loading, fetchProducts, fetchProduct, viewProductDetails };
});

export const useFormStore = defineStore("forms", () => {
  const router = useRouter();
  const loading = ref(false);

  const email = ref("");
  const password = ref("");
  const error = ref(null);
  // const user = ref(null);

  const Register = async () => {
    loading.value = true;

    try {
      console.log(email.value, password.value);
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      router.push("/");
      email.value = "";
      password.value = "";
    } catch (err) {
      error.value = err.message;
      console.error(err.message);
      // throw new Error("Unable to register user");
    }
    loading.value = false;
  };

  const signInWithGoogle = async () => {
    try {
      // const provider = await new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      router.push("/");
    } catch (err) {
      error.value = err.message;
      throw new Error("Unable to register user");
    }
  };

  const logIn = async () => {
    loading.value = true;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      router.push("/");
      email.value = "";
      password.value = "";
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/invalid-email":
          error.value = "Invalid email";
          break;
        case "auth/user-not-found":
          error.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          error.value = "Incorrect password";
          break;
        default:
          error.value = "Incorrect email or password";
          break;
      }
    }
    loading.value = false;
  };

  return { email, password, error, loading, Register, signInWithGoogle, logIn };
});
