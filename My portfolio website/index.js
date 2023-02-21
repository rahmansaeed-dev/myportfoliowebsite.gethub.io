
var tablinks = document.getElementsByClassName("tab-links")
var tablcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tablcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var menuList = document.getElementById("menu_list")
var openMenu = document.getElementById("openmanu");
var closeMenu = document.getElementById("closemanu");

openMenu.addEventListener('click', () => {
    menuList.classList.add("active")
} )

closeMenu.addEventListener('click', () => {
    menuList.classList.remove("active")
} )

