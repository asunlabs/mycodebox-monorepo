const toggleThemeBtn = document.querySelector(".toggleTheme")
const html = document.querySelector("html")
const DARK_MODE = "dark-mode"

toggleThemeBtn.addEventListener("click", () => {

    if (toggleThemeBtn.innerHTML === "Dark Mode") { 
        toggleThemeBtn.innerHTML = "Light Mode"
        toggleThemeBtn.classList.add(DARK_MODE)
        html.classList.add(DARK_MODE)
    } else  { 
        toggleThemeBtn.innerHTML = "Dark Mode"
        toggleThemeBtn.classList.remove(DARK_MODE)
        html.classList.remove(DARK_MODE)
    }
})