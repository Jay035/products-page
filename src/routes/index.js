import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetails from "../views/ProductDetails.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "pageNotFound",
    component: NotFound,
  },
];

const router = createRouter({
  mode: "history",
  base: process.env.BASE_URL,
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You need to login to view products");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
