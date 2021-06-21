let button = document.querySelector(".modal-popup");
let modalBg = document.querySelector(".modal-bg");
let modalCloser = document.querySelector(".modelClose");

button.addEventListener("click", togglemodel);
function togglemodel() {
  modalBg.classList.add("bgActive");
}
console.log(modalCloser);
modalCloser.addEventListener("click", remover);

function remover() {
  modalBg.classList.remove("bgActive");
}
