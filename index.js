

const menuActive = document.querySelector('.header__menu-active');
const menuMain = document.querySelector('.header__menu-main');


function openMenuMain () {
    menuActive.classList.add('header__menu-active_type_active');
    menuMain.classList.add('header__menu-main_type_disabled');
}

function closeMenuMain (menu) {
    menuActive.classList.remove('header__menu-active_type_active');
    menuMain.classList.remove('header__menu-main_type_disabled');
}

document.querySelector('.header__button').addEventListener('click', () => {
    openMenuMain();
})

document.querySelector('.header__button-close').addEventListener('click', () => {
    closeMenuMain();
})