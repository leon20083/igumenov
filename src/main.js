import { createApp } from "vue";
import App from "./App.vue";
import "../src/js/skroll.min";

createApp(App).mount("#app");

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
new Skroll()
    .add(".s-title, h1, .skills, .head-content-left p", {
        delay: 50,
        duration: 1000,
        animation: "zoomIn",
    })
    .init();
new Skroll()
    .add(".portfolio .item", {
        animation: "fadeInDown",
        delay: 350,
        duration: 550,
        triggerBottom: 1,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    })
    .init();

new Skroll()
    .add(".about-me .s1-right .s1-right-txt p", {
        animation: "growInRight",
        delay: 400,
        duration: 1500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)",
    })
    .init();
