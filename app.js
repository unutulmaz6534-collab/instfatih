// 🔥 BURAYI FIREBASE'DEN ALIP DOLDUR
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let currentUser = "";

// giriş
function login() {
  const u = document.getElementById("username").value.trim();
  if (!u) return alert("Kullanıcı adı yaz");
  currentUser = u;
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
  loadMessages();
}

// mesaj gönder
function sendMessage() {
  const text = document.getElementById("messageInput").value.trim();
  if (!text) return;

  db.collection("mesajlar").add({
    gonderen: currentUser,
    metin: text,
    zaman: Date.now()
  });

  document.getElementById("messageInput").value = "";
}

// mesajları çek
function loadMessages() {
  db.collection("mesajlar")
    .orderBy("zaman")
    .onSnapshot(snapshot => {
      const box = document.getElementById("messages");
      box.innerHTML = "";
      snapshot.forEach(doc => {
        const d = doc.data();
        const div = document.createElement("div");
        div.className = "msg " + (d.gonderen === currentUser ? "me" : "other");
        div.innerText = d.gonderen + ": " + d.metin;
        box.appendChild(div);
      });
      box.scrollTop = box.scrollHeight;
    });
}