window.onload = () => {
  var btn = document.getElementById("create-account-button");
  var close_register = document.getElementById("close-register");
  var overlay = document.getElementById("overlay");
  var user = document.getElementById("overlay");
  var btn_add_post = document.getElementById("add-post");
  var close_modal = document.getElementById("close-modal");
  var users_item = document.getElementsByClassName("users-item");
  var messenger_close = document.getElementById("messenger");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      var popup = document.getElementById("register-popup");
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  }
  if (close_register) {
    close_register.addEventListener("click", () => {
      var popup = document.getElementById("register-popup");
      popup.style.display = "none";
      overlay.style.display = "none";
    });
  }

  if (btn_add_post) {
    btn_add_post.addEventListener("click", (e) => {
      var modal = document.getElementById("modal-post");
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  }
  if (close_modal) {
    close_modal.addEventListener("click", (e) => {
      var modal = document.getElementById("modal-post");
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  }

  if (users_item.length) {
    for (let index = 0; index < users_item.length; index++) {
      const user_item = users_item[index];
      user_item.addEventListener("click", () => {
        messenger.style.display = "block";
      });
    }
  }

  if (messenger_close) {
    messenger_close.addEventListener("click", () => {
      var messenger = document.getElementById("messenger");
      messenger.style.display = "none";
    });
  }
};
