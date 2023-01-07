function toggleMenu(){
const menuMobile = document.getElementById("menu-mobile")

if(menuMobile.className === "menu-mobile-activ"){
    menuMobile.className = "menu-mobile"
}else {
    menuMobile.className = "menu-mobile-activ"
}
}