// js/config/firebase-config.js

// --- INICIALIZAÇÃO FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyAt7jAk5r2tqSdyTf2m7MUebd_t7bbDTJk",
  authDomain: "planeamento-viagem-paris.firebaseapp.com",
  databaseURL: "https://planeamento-viagem-paris-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planeamento-viagem-paris",
  storageBucket: "planeamento-viagem-paris.appspot.com",
  messagingSenderId: "121000897121",
  appId: "1:121000897121:web:75662c01dc56926bf61820"
};

// Inicializa a aplicação Firebase
firebase.initializeApp(firebaseConfig);

// Exporta a referência da base de dados para ser usada noutros módulos
export const database = firebase.database();
