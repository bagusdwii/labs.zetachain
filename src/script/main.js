const mobileBtnMode = document.getElementById("switch-mode");
mobileBtnMode.style.border = "none";
const iconTheme = document.querySelector(".offcanvas .offcanvas-body .navbar-nav form .nav-item button i#icon-mobile");
iconTheme.setAttribute("class", "bi bi-brightness-low");

const brandNav = document.getElementsByClassName("brand-zetalabs");

const dayMode = document.querySelector("form .nav-item .btn i");
dayMode.setAttribute("class", "bi bi-brightness-low");

const cardComingSoon = document.querySelectorAll(".coming-soon");
const comingSoonText = document.querySelectorAll(".coming-soon-text h6");

const swapDiv = document.getElementById("swap");

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {
  const htmlElement = document.querySelector("html");

  const isDarkMode = htmlElement.getAttribute("data-bs-theme") === "dark";
  const isDayMode = htmlElement.getAttribute("data-bs-theme") === "light";

  if (isDarkMode) {
    htmlElement.removeAttribute("data-bs-theme");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    brandNav[0].style.color = "white";
    cardComingSoon[0].style.backgroundColor = "#1f2328";
    cardComingSoon[1].style.backgroundColor = "#1f2328";
    comingSoonText[0].style.backgroundColor = "#3c4146";
    comingSoonText[1].style.backgroundColor = "#3c4146";
    dayMode.setAttribute("class", "bi bi-moon");
  }

  if (isDayMode) {
    htmlElement.removeAttribute("data-bs-them");
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    brandNav[0].style.color = "#005741";
    cardComingSoon[0].style.backgroundColor = "#eff1f4";
    cardComingSoon[1].style.backgroundColor = "#eff1f4";
    comingSoonText[0].style.backgroundColor = "#a9acb0";
    comingSoonText[1].style.backgroundColor = "#a9acb0";
    dayMode.setAttribute("class", "bi bi-brightness-low");
  }
});

mobileBtnMode.addEventListener("click", function () {
  const htmlElement = document.querySelector("html");

  const brandNavbar = document.getElementById("brand-nav");

  const isDarkMode = htmlElement.getAttribute("data-bs-theme") === "dark";

  const isDayMode = htmlElement.getAttribute("data-bs-theme") === "light";

  if (isDarkMode) {
    htmlElement.removeAttribute("data-bs-theme");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    brandNavbar.style.color = "white";
    brandNav[0].style.color = "white";
    cardComingSoon[0].style.backgroundColor = "#1f2328";
    cardComingSoon[1].style.backgroundColor = "#1f2328";
    comingSoonText[0].style.backgroundColor = "#3c4146";
    comingSoonText[1].style.backgroundColor = "#3c4146";
    iconTheme.setAttribute("class", "bi bi-moon");
  }

  if (isDayMode) {
    htmlElement.removeAttribute("data-bs-them");
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    brandNavbar.style.color = "#005741";
    brandNav[0].style.color = "#005741";
    cardComingSoon[0].style.backgroundColor = "#eff1f4";
    cardComingSoon[1].style.backgroundColor = "#eff1f4";
    comingSoonText[0].style.backgroundColor = "#a9acb0";
    comingSoonText[1].style.backgroundColor = "#a9acb0";
    iconTheme.setAttribute("class", "bi bi-brightness-low");
  }
});

swapDiv.addEventListener("click", function () {
  window.location.href = "https://labs.zetachain.com/swap";
});

const linkZetaDev = document.getElementById("here!");

linkZetaDev.addEventListener("click", function () {
  window.location.href = "https://www.zetachain.com/developers";
});
