import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import Products from "../views/Products.vue";
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
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: Products,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth, (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    })
}

router.beforeEach(async (to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(await getCurrentUser()){
            next();
        }else{
            alert("You don't have access!");
            next("/")
        }
    }else{
        next();
    }
});

export default router;
