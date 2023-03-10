const MENU_ACTIVE_CLASS_NAME = "visible-element";
const BODY_FiXED_CLASS_NAME = "stop-scroll";

/*menu*/
const myMenu = document.querySelector("#my-menu");
const myBody = document.body;

const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const closeMenuBtns = document.querySelectorAll(".link-menu");

openMenuBtn.addEventListener("click", () => {
  myMenu.classList.add(MENU_ACTIVE_CLASS_NAME);
});
openMenuBtn.addEventListener("click", () => {
  myBody.classList.add(BODY_FiXED_CLASS_NAME);
});

closeMenuBtn.addEventListener("click", () => {
  myMenu.classList.remove(MENU_ACTIVE_CLASS_NAME);
});
closeMenuBtn.addEventListener("click", () => {
  myBody.classList.remove(BODY_FiXED_CLASS_NAME);
});

const closeMyMenu = () => {
  myMenu.classList.remove(MENU_ACTIVE_CLASS_NAME);
};
const startScrolling = () => {
  myBody.classList.remove(BODY_FiXED_CLASS_NAME);
};

closeMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMyMenu();
    startScrolling();
  });
});

/*popup*/
const myMailForm = document.querySelector("#modal-mail-form");

const openModalBtn = document.querySelector("#open-mail-form");
const footerOpenModalBtn = document.querySelector("#open-mail-form-footer");
const closeModalBtn = document.querySelector("#close-mail-form");

openModalBtn.addEventListener("click", () => {
  myMailForm.classList.add(MENU_ACTIVE_CLASS_NAME);
});
openModalBtn.addEventListener("click", () => {
  myBody.classList.add(BODY_FiXED_CLASS_NAME);
});

footerOpenModalBtn.addEventListener("click", () => {
  myMailForm.classList.add(MENU_ACTIVE_CLASS_NAME);
});
footerOpenModalBtn.addEventListener("click", () => {
  myBody.classList.add(BODY_FiXED_CLASS_NAME);
});

closeModalBtn.addEventListener("click", () => {
  myMailForm.classList.remove(MENU_ACTIVE_CLASS_NAME);
});

closeModalBtn.addEventListener("click", () => {
  myBody.classList.remove(BODY_FiXED_CLASS_NAME);
});

/*button-up*/
const myHeader = document.header;
const myButtonUp = document.querySelector("#my-button-up");

window.addEventListener("scroll", function () {
  let myScrollPx = window.pageYOffset;
  if (myScrollPx > 70) {
    myButtonUp.classList.add(MENU_ACTIVE_CLASS_NAME);
  } else {
    myButtonUp.classList.remove(MENU_ACTIVE_CLASS_NAME);
  }
});
