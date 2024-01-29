function menuOn() {
  let menuOn = document.getElementById("nav-buttons");
    menuOn.style.transform = "scaleY(1)";
}
function menuOff() {
  let menuOff = document.getElementById("nav-buttons");
    menuOff.style.transform = "scaleY(0)";
}
function loading() {
  let loading = document.getElementById("loading");
    loading.style.opacity = 0;
  setTimeout(() => {
    loading.style.display = "none";
}, 500);
}
