console.log("JamesTech Dashboard Loaded");
const hamburger =
document.getElementById("hamburger");

const sidebar =
document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});
const overlay =
document.querySelector(".overlay");
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
console.log("JamesTech Dashboard Loaded");
const hamburger =
document.getElementById("hamburger");

const sidebar =
document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});
const overlay =
document.querySelector(".overlay");
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});