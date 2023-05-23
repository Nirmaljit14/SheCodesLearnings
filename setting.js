const hamburgerButton = document.getElementById(".hamburger-button");
const mobilenav = document.querySelector(".mobile-nav")

hamburgerButton.addEventListener("click", ()=> {
    mobilenav.classList.toggle("display-none");
})