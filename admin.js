const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function login() {
  const u = username.value;
  const p = password.value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    loginBox.style.display = "none";
    panel.style.display = "block";
    loadPosts();
  } else {
    error.innerText = "Hatalı giriş";
  }
}

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  postList.innerHTML = "";

  posts.forEach((post, i) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <img src="${post.img}">
      <p>${post.desc}</p>
      <button class="delete" onclick="deletePost(${i})">Sil</button>
    `;
    postList.appendChild(div);
  });
}

function deletePost(i) {
  let posts = JSON.parse(localStorage.getItem("posts"));
  posts.splice(i, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  loadPosts();
}