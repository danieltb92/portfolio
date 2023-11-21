const lightModeBtn = document.querySelector(".dark-btn");
const darkModeBtn = document.querySelector(".light-btn");



function setDarkMode() {
    setUserTheme("dark");
};

function setLightMode() {
    setUserTheme("light");
};

function setUserTheme(theme) {  
    document.documentElement.setAttribute("data-theme", theme);
};

lightModeBtn.addEventListener("click", setDarkMode);
darkModeBtn.addEventListener("click", setLightMode);