import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// Add Firebase products that you want to use
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// todo: replace the following with your app's firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEuh_1rjUTYFgZeRO3zI8vhU9W_O1Nco",
  authDomain: "gym-project-64855.firebaseapp.com",
  databaseURL: "https://gym-project-64855-default-rtdb.firebaseio.com",
  projectId: "gym-project-64855",
  storageBucket: "gym-project-64855.appspot.com",
  messagingSenderId: "708422380128",
  appId: "1:708422380128:web:17b07057b021db186af105",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
