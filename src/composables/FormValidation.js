import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { auth, provider } from "@/firebaseConfig";

export default function FormValidation() {
  const email = ref("");
  const password = ref("");
  const error = ref(null);

  const router = useRouter();

  const Register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      console.log("successfully registered");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err) {
      error.value = err.message;
    }
  };

  const signInWithGoogle = async () => {
    try {
      // const provider = await new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      router.push("/");
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
  };

  return { email, password, error, Register, logIn, signInWithGoogle };
}
