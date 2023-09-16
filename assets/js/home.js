window.onload = () => {
  var close_modal = document.getElementByid("close-modal");

  close_modal.addEventListener("click", (e) => {
    e.preventDefault();
    var popup = document.getElementById("close-modal");
    popup.style.display = "none";
  });
};
