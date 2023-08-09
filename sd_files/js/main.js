const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');


    burger.addEventListener('click', () => {
        if (nav.classList == 'show') {
            nav.classList.remove('show');
        } else {
            nav.classList.add('show');
        }

        //Buger Animation
        burger.classList.toggle('toggle');


    });



}


navSlide();