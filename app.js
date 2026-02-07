const ADMIN_PASSWORD = "1234";
let dark = true;

let posts = JSON.parse(localStorage.getItem("posts")) || [];

// LOGIN
function login() {
  if (adminPass.value === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    adminLogin.style.display = "none";
    newPost.style.display = "block";
  } else {
    alert("Yanlış şifre");
  }
}

// POST EKLE
function addPost() {
  if (!imgUrl.value) return alert("Resim URL gir");

  posts.unshift({
    img: imgUrl.value,
    desc: desc.value,
    likes: 0,
    comments: []
  });

  localStorage.setItem("posts", JSON.stringify(posts));
  imgUrl.value = "";
  desc.value = "";
  renderPosts();
}

// POSTLARI GÖSTER
function renderPosts() {
  feed.innerHTML = "";

  posts.forEach((p, i) => {
    feed.innerHTML += `
      <div class="post">
        <img src="${p.img}">
        <p>${p.desc}</p>

        <div class="actions">
          <span onclick="like(${i})">❤️ ${p.likes}</span>
          <span onclick="comment(${i})">💬</span>
          ${isAdmin() ? `<span onclick="del(${i})">🗑️</span>` : ""}
        </div>
      </div>
    `;
  });
}

// LIKE
function like(i) {
  posts[i].likes++;
  save();
}

// COMMENT
function comment(i) {
  const c = prompt("Yorum yaz");
  if (!c) return;
  posts[i].comments.push(c);
  save();
}

// DELETE
function del(i) {
  if (confirm("Silinsin mi?")) {
    posts.splice(i, 1);
    save();
  }
}

function save() {
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

// TEMA
themeBtn.onclick = () => {
  dark = !dark;
  document.body.style.background = dark ? "#000" : "#fff";
  document.body.style.color = dark ? "#fff" : "#000";
};

// ADMIN KONTROL
function isAdmin() {
  return localStorage.getItem("admin") === "true";
}

// SAYFA AÇILINCA
window.onload = () => {
  if (isAdmin()) {
    adminLogin.style.display = "none";
    newPost.style.display = "block";
  }
  renderPosts();
};