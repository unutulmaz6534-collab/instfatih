// POSTLAR
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// SAYFA AÇILINCA POSTLARI YÜKLE
window.onload = () => {
  renderPosts();
};

// POST EKLE
function addPost() {
  const img = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!img) {
    alert("Resim URL gir");
    return;
  }

  posts.unshift({ img, desc });
  localStorage.setItem("posts", JSON.stringify(posts));

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";

  renderPosts();
}

// POSTLARI EKRANA BAS
function renderPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <img src="${post.img}">
      <p>${post.desc || ""}</p>
    `;
    feed.appendChild(div);
  });
}

// HİKAYE AÇ
function openStory(url) {
  const modal = document.getElementById("storyModal");
  const img = document.getElementById("storyImg");
  img.src = url;
  modal.style.display = "flex";
}

// HİKAYE KAPAT
function closeStory() {
  document.getElementById("storyModal").style.display = "none";
}

// TEMA DEĞİŞTİR
let dark = true;
document.getElementById("themeBtn").onclick = () => {
  dark = !dark;
  document.body.style.background = dark ? "#000" : "#fff";
  document.body.style.color = dark ? "#fff" : "#000";
};