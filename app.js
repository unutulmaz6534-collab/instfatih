function paylas() {
  const imgUrl = document.getElementById("imgUrl").value;
  const desc = document.getElementById("desc").value;

  if (!imgUrl) {
    alert("Resim URL gir");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <img src="${imgUrl}">
    <p>${desc}</p>
  `;

  document.getElementById("posts").prepend(postDiv);

  document.getElementById("imgUrl").value = "";
  document.getElementById("desc").value = "";
}