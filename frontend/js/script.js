const menuButton = document.querySelector('.header--menu__button');
const menuContent = document.querySelector('.header--menu__content');
const hamburgerMenu = document.querySelector('.ham--menu__icon');
const sideBarMenu = document.querySelector('.sidebar--menu');
const sideBarMenuClose = document.querySelector('.sidebar--menu__close');
const profileMenu = document.querySelector('.header--profile__inner');
const profileButton = document.querySelector('.header--profile__name');

let shouldBeOpen = false;
let shouldSideBarMenuBeOpen = false;
let profileMenuIsOpen = false;

menuButton.addEventListener('click',(e) => {
    e.stopPropagation();
    if(shouldBeOpen){
        menuContent.classList.remove('animateMenuClass');
    }else{
        menuContent.classList.add('animateMenuClass')

    }
    shouldBeOpen = !shouldBeOpen;
})

document.body.addEventListener('click', () => {
    if(shouldBeOpen){
        menuContent.classList.remove('animateMenuClass')
    }
    shouldBeOpen = false;
})

hamburgerMenu.addEventListener('click',() => {
    if(shouldSideBarMenuBeOpen){
        sideBarMenu.style.transform = 'translateX(-100%)';
        sideBarMenu.style.opacity = '0';
        document.body.style.overflowY = '';
    }else{
        sideBarMenu.style.transform = 'translateX(0)';
        sideBarMenu.style.opacity = '1';
        document.body.style.overflowY = 'hidden';
    }
    shouldSideBarMenuBeOpen = !shouldSideBarMenuBeOpen;
})

sideBarMenuClose.addEventListener('click',() => {
    sideBarMenu.style.transform = 'translateX(-100%)';
    sideBarMenu.style.opacity = '0';
    shouldSideBarMenuBeOpen = false;
    document.body.style.overflowY = '';
})

if(profileButton){
    profileButton.addEventListener('click', () => {
        console.log(profileMenuIsOpen)
        if(profileMenuIsOpen){
            profileMenu.style.display = 'none';
        }else{
            profileMenu.style.display = 'flex';
        }
        profileMenuIsOpen = !profileMenuIsOpen;
    });
    
}