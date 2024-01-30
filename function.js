function menuOn() {
  let menuOn = document.getElementById("nav-buttons");
    menuOn.style.transform = "scaleY(1)";
}
function menuOff() {
  let menuOff = document.getElementById("nav-buttons");
    menuOff.style.transform = "scaleY(0)";
}
function loading() {
  let loadingStopped = false;
  let preloader = document.getElementById("loading");
  setTimeout(() => {
    if (!loadingStopped) {
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
      loadingStopped = true;
    }
  }, 3000);
  window.addEventListener('load', () => {
    if (!loadingStopped) {
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
      loadingStopped = true;
    }
  });
}
