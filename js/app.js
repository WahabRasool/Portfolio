/* toggle button */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active link */
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    /* sticky navbar */

    let haeder = document.querySelector('header');


    haeder.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle button and  navbar when click navbar link(scroll)*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove ('active');
};

/* scroll reveal */
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 /* typed js */

 const typed = new Typed('.multiple-text',{
    // Strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    strings: ['<i>Frontend</i> Developer.', '&amp; Backend Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,

 });
