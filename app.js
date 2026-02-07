// TEST
console.log("app.js çalışıyor");

// POST EKLEME
function addPost() {
  const imgUrl = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!imgUrl) {
    alert("Resim URL gir");
    return;
  }

  const feed = document.getElementById("feed");

  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <img src="${imgUrl}">
    <p>${desc}</p>
  `;

  feed.prepend(post);

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";
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