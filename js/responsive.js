var mainmenu = document.getElementsByClassName('mainmenu')[0]
var burger1 = document.getElementsByClassName('line1')[0]
var burger2 = document.getElementsByClassName('line2')[0]
var burger3 = document.getElementsByClassName('line3')[0]

function toggleNavbar() {
    if (mainmenu.classList == 'mainmenu') {
        mainmenu.setAttribute('class', 'mainmenu mainmenu-active')
        burger1.classList.replace('line1', 'line1-active')
        burger2.classList.replace('line2', 'line2-active')
        burger3.classList.replace('line3', 'line3-active')
    } else {
        mainmenu.setAttribute('class', 'mainmenu')
        burger1.classList.replace('line1-active', 'line1')
        burger2.classList.replace('line2-active', 'line2')
        burger3.classList.replace('line3-active', 'line3')
    }
}

var submenu = document.getElementsByClassName('submenu-mobile')[0]
var arrow = document.querySelector('.dropdown-arrow')

function toggleDropdown() {
    if (submenu.classList == 'submenu-mobile') {
        submenu.setAttribute('class', 'submenu-mobile submenu-mobile-active')
        arrow.classList.replace('downClass', 'upClass')
    } else {
        submenu.setAttribute('class', 'submenu-mobile')
        arrow.classList.replace('upClass', 'downClass')
    }
}