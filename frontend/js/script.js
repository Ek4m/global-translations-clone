const menuButton = document.querySelector('.header--menu__button');
const menuContent = document.querySelector('.header--menu__content');

let shouldBeOpen = false;
menuButton.addEventListener('click',(e) => {
    e.stopPropagation();
    if(shouldBeOpen){
        menuContent.style.display = '';
    }else{
        menuContent.style.display = 'block';
    }
    shouldBeOpen = !shouldBeOpen;
})

document.body.addEventListener('click', () => {
    if(shouldBeOpen){
        menuContent.style.display = '';
    }
    shouldBeOpen = false;
})