var open = document.getElementById("open-icon");
var close = document.getElementById("close-icon");
var menus = document.getElementById("menu");

open.addEventListener("click", (e) => {
  open.style.display = "none";
  close.style.display = "inline-block";
  menus.classList.add("open");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", (e) => {
  open.style.display = "inline-block";
  close.style.display = "none";
  menus.classList.remove("open");
  document.body.style.overflow = "scroll";
});
