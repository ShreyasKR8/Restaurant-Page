import loadHomePage from "./homepage"
import loadMenuPage from "./menu-page";
import loadAboutPage from "./contact-page";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

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

aboutBtn.addEventListener("click", () => {
    content.replaceChildren();
    loadAboutPage();
})
