const ADMIN_PASSWORD = "1234";

// GİRİŞ
function login() {
  const pass = document.getElementById("adminPass").value;

  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("newPost").style.display = "block";
  } else {
    alert("Yanlış şifre");
  }
}

// POST EKLE
function addPost() {
  const img = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!img) return alert("Resim URL gir");

  const feed = document.getElementById("feed");

  feed.innerHTML =
    `<div class="post">
      <img src="${img}">
      <p>${desc}</p>
    </div>` + feed.innerHTML;

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";
}

// SAYFA AÇILINCA
window.onload = () => {
  if (localStorage.getItem("admin") === "true") {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("newPost").style.display = "block";
  }
};