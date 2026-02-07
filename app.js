function openStory(imgUrl) {
  const modal = document.getElementById("storyModal");
  const img = document.getElementById("storyImg");

  img.src = imgUrl;
  modal.style.display = "flex";
}

function closeStory() {
  document.getElementById("storyModal").style.display = "none";
}