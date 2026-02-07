function paylas() {
  const imgUrl = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!imgUrl) {
    alert("Resim URL gir");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <img src="${imgUrl}">
    <p>${desc}</p>
  `;

  document.getElementById("posts").prepend(post);

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";
}