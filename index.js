function openSideBar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.add("open")

    const menu = document.querySelector(".menu-btn")
    menu.classList.add("hide")
}

function closeSideBar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.remove("open")

    const menu = document.querySelector(".menu-btn")
    menu.classList.remove("hide")
}