const myModal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal");
const close = document.querySelector(".close");
const btn = document.querySelector(".btn");
let clickCount = 0;
let firstCliclTime = 0;
btn.addEventListener("click", (e) => {
  let time = new Date().getTime();
  if (firstCliclTime - clickCount < 3000) {
    clickCount++;
  } else {
    clickCount = 0;
  }
  time = firstCliclTime;
  if (clickCount >= 5) {
    showWarrning();
  }
  //   if (clickCount == 0) {
  //     clickCount = time;
  //   }                                raveshe
  //   clickCount++;
  //   if (clickCount > 5 && time - firstCliclTime < 3000) {
  //     alert("nakon");
  //     clickCount = 0;
  //     return;
  //   }
  //   if (time - firstCliclTime >= 3000) {
  //     clickCount = 1;
  //     firstCliclTime = time;
  //   }
});
function showWarrning() {
  modalContent.style.display = "block";
}
