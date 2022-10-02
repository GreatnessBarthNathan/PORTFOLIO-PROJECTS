import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDv7-rbD0jSLDqAUcftE27Lh8tdvtAcOIk",
  authDomain: "shopping-cart-auth-5d00c.firebaseapp.com",
  projectId: "shopping-cart-auth-5d00c",
  storageBucket: "shopping-cart-auth-5d00c.appspot.com",
  messagingSenderId: "980561944873",
  appId: "1:980561944873:web:fd40e2e8d010298881d738"
};


const app = initializeApp(firebaseConfig);

export default app;