import loadHomePage from "./homepage"
import loadMenuPage from "./menu-page";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
// const homeBtn = document.querySelector(".about-btn");

loadHomePage();
console.log("Loaded"); 

menuBtn.addEventListener("click", () => {
    content.replaceChildren();
    loadMenuPage();
})

homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    loadHomePage();
})
