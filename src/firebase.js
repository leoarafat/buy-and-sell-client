
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: AIzaSyD-DZhZZmNvPVmSB0EigUBz7GZ_wy3XkZw
  // authDomain: buy-and-sell-6fea0.firebaseapp.com
  // projectId: buy-and-sell-6fea0
  // storageBucket: buy-and-sell-6fea0.appspot.com
  // messagingSenderId: 126585704919,
  // appId: 1:126585704919:web:25426ade026582bea1fb92

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


export const app = initializeApp(firebaseConfig);