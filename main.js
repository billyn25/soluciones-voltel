//nav lateral
function openNav() {
    document.getElementById("mySidenav").style.right = "0px";
    document.getElementById("main").style.marginRight = "300px";
}

function closeNav() {

    document.getElementById("mySidenav").style.right = "-300px";
    document.getElementById("main").style.marginRight= "0";
}

//evento para el header nav, cuando haces scroll
let imgLogo = document.getElementById("logo");
//let main = document.getElementById("main");
//let buttonX = document.getElementById("buttonX");
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > window.innerHeight - 150) {
            $("header nav").addClass('navColor');
            imgLogo.src = "img/voltel_2.png";
            imgLogo.style.width='65px'
            imgLogo.style.height='auto'
        } else {
            $("header nav").removeClass('navColor');
            imgLogo.src = "img/voltel.png";
            imgLogo.style.width='110'
            imgLogo.style.height='auto'
        }
    });
});

//ajustar imagen slider segun pantalla
function setDimensions(){

    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;
    let slider = $('.uk-slideshow-items');
    let sliderImg = $('.uk-slideshow-items img');
    let overlay2 = $('.uk-overlay2');

    slider.css('height', windowsHeight + 'px');
    slider.css('width', windowsWidth + 'px');

    sliderImg.css('height', windowsHeight + 'px');
    sliderImg.css('width', windowsWidth + 'px');

    overlay2.css('top', windowsHeight-90 + 'px');
    overlay2.css('left', windowsWidth/2-65 + 'px');

    $('.sidenav').css('height', windowsHeight + 'px');
}

//when resizing the site, we adjust the heights of the sections
$(window).resize(function() {
    setDimensions();
});

setDimensions();
