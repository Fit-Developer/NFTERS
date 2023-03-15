var open = document.getElementById("open-icon");
var close = document.getElementById("close-icon");
var menus = document.getElementById("menu");
var actions = document.getElementById("actions");

open.addEventListener("click", (e) => {
  open.style.display = "none";
  close.style.display = "inline-block";
  menus.classList.add("open");
  actions.style.display = "flex";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", (e) => {
  open.style.display = "inline-block";
  close.style.display = "none";
  menus.classList.remove("open");
  actions.style.display = "none";
  document.body.style.overflow = "scroll";
});
