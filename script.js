// toggle icon  //

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
  });  

//   sticky nabar     //

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

//  remove toggle icon and navbar when click navbar lin  //

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

//  scroll reveal  //

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .project-container, .about-container, .certificate-container , .contact form' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content p' , { origin: 'left' });
ScrollReveal().reveal('.home-content p' , { origin: 'right' });

//   typed js  //

const typed = new Typed('.multiple-text',{
    strings:['Student' , 'Engineer' , 'Developer','Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const typed1 = new Typed('#about-role',{
    strings:['Frontend Developer' ,'Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//  for prevent from inspect  //

document.addEventListener('contextmenu', event=> event.preventDefault()); 
        document.onkeydown = function(e) { 
        if(event.keyCode == 123) { 
        return false; 
        } 
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
        return false; 
        } 
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
        return false; 
        } 
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
        return false; 
        } 
        } 

document.getElementById('sende').onclick=function(){
    window.location.href = "mailto:" + "srivithya.pon@gmail.com" + "?cc=" + emailCC + "&subject=" + emailSubject + "&body=" + emailBody;
}