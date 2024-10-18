const outer = document.querySelector(".outerdiv");
const middl = document.querySelector(".middldiv");
const inner = document.querySelector(".innerdiv");

inner.addEventListener("click", (e) => {
  alert("inner");
});
middl.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("middl");
});
outer.addEventListener("click", (e) => {
  alert("outer");
});
