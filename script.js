const menu = document.querySelector(".disappearance");
let flag = true;

window.addEventListener('scroll', () =>{

    if (window.pageYOffset < 160){
        
        menu.classList.remove('navbar');
        menu.classList.add("disappearance");
    }
    else if (window.pageYOffset > 160){

        menu.classList.remove('disappearance');
        menu.classList.add("navbar");
    }

})
