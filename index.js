const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//for opening modal
const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

//for closing modal
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
