const ADMIN_PASSWORD = "1234";

let stories = JSON.parse(localStorage.getItem("stories")) || [];

// SAYFA AÇILINCA
window.onload = () => {
  renderStories();

  if (localStorage.getItem("admin") === "true") {
    adminLogin.style.display = "none";
    adminPanel.style.display = "block";
  }
};

// ADMIN GİRİŞ
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

  stories.unshift(storyUrl.value);
  localStorage.setItem("stories", JSON.stringify(stories));
  storyUrl.value = "";
  renderStories();
}

// STORYLERİ GÖSTER
function renderStories() {
  storiesDiv = document.getElementById("stories");
  storiesDiv.innerHTML = "";

  stories.forEach((url, i) => {
    const div = document.createElement("div");
    div.className = "story";
    div.innerText = "Story";
    div.onclick = () => openStory(url);
    storiesDiv.appendChild(div);
  });
}

// STORY AÇ
function openStory(url) {
  storyImg.src = url;
  storyModal.style.display = "flex";
}

// STORY KAPAT
function closeStory() {
  storyModal.style.display = "none";
}