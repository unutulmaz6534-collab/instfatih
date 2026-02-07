const ADMIN_PASSWORD = "1234";

/* ---------- POSTLAR (ESKİLER KORUNUR) ---------- */
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  feed.innerHTML = "";
  posts.forEach(p => {
    feed.innerHTML += `
      <div class="post">
        <img src="${p.img}">
        <p>${p.desc || ""}</p>
      </div>
    `;
  });
}

/* ---------- STORYLER ---------- */
let stories = JSON.parse(localStorage.getItem("stories")) || [];
let currentStoryIndex = null;

// SAYFA AÇILINCA
window.onload = () => {
  renderPosts();
  renderStories();

  if (localStorage.getItem("admin") === "true") {
    adminLogin.style.display = "none";
    adminPanel.style.display = "block";
  }
};

// ADMIN LOGIN
function login() {
  if (adminPass.value === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    adminLogin.style.display = "none";
    adminPanel.style.display = "block";
  } else {
    alert("Yanlış şifre");
  }
}

// STORY EKLE
function addStory() {
  if (!storyUrl.value) return alert("URL gir");

  stories.unshift({ url: storyUrl.value, views: 0 });
  localStorage.setItem("stories", JSON.stringify(stories));
  storyUrl.value = "";
  renderStories();
}

// STORYLERİ GÖSTER
function renderStories() {
  storiesDiv = document.getElementById("stories");
  storiesDiv.innerHTML = "";

  stories.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "story";
    div.innerText = "Story";
    div.onclick = () => openStory(i);
    storiesDiv.appendChild(div);
  });
}

// STORY AÇ
function openStory(i) {
  currentStoryIndex = i;
  stories[i].views++;
  localStorage.setItem("stories", JSON.stringify(stories));

  storyImg.src = stories[i].url;
  storyViews.innerText = `👁 ${stories[i].views}`;
  storyModal.style.display = "flex";

  // 5 sn sonra otomatik kapan
  setTimeout(closeStory, 5000);

  // admin değilse silme gizle
  deleteStoryBtn.style.display =
    localStorage.getItem("admin") === "true" ? "block" : "none";
}

// STORY KAPAT
function closeStory() {
  storyModal.style.display = "none";
}

// STORY SİL (ADMIN)
function deleteStory() {
  if (!confirm("Story silinsin mi?")) return;
  stories.splice(currentStoryIndex, 1);
  localStorage.setItem("stories", JSON.stringify(stories));
  closeStory();
  renderStories();
}