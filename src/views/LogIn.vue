<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Sign In</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger text-red-400">{{error}}</div>
            <form action="#" @submit.prevent="logIn">
              <!-- <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="name"
                  />
                </div>
              </div> -->

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/firebaseConfig";


    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const router = useRouter();

    const logIn = async () => {
      try{
        await signInWithEmailAndPassword(auth, email.value, password.value)
        console.log("successfully signed in")
        console.log(auth.currentUser)
        router.push('/')
      }catch(err){
        console.log( err.code)
        switch(err.code){
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
              error.value = "Incorrect email or password"
              break;
        }
      }
    }


</script>

<style></style>
