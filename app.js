// TEMA
const btn = document.getElementById("themeBtn");
btn.onclick = () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// POST EKLE
function addPost() {
  const url = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!url) return alert("Resim URL gir");

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <img src="${url}">
    <div class="actions">
      <span class="like" onclick="this.classList.toggle('active')">❤</span>
    </div>
    <p>${desc}</p>
  `;

  document.getElementById("feed").prepend(post);

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";
}

// HİKAYE
function openStory(url) {
  document.getElementById("storyImg").src = url;
  document.getElementById("storyModal").style.display = "flex";
}

function closeStory() {
  document.getElementById("storyModal").style.display = "none";
}