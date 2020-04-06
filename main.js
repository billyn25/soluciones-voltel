//nav lateral
function openNav() {

    document.getElementById("main").style.display= "none";
    document.getElementById("mySidenav").style.right = "0px";
    document.getElementById("main").style.marginRight = "270px";
}

function closeNav() {
    document.getElementById("main").style.display= "initial";
    document.getElementById("mySidenav").style.right = "-270px";
    document.getElementById("main").style.marginRight= "0";
}

//evento para el header nav, cuando haces scroll
let imgLogo = document.getElementById("logo");
let main = document.getElementById("main");
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > window.innerHeight - 150) {
            $("header nav").addClass('bg-primary');
            imgLogo.src = "img/voltel_2.png";
            imgLogo.style.width='80px'
            imgLogo.style.height='auto'
            main.style.top='0'
        } else {
            $("header nav").removeClass('bg-primary');
            imgLogo.src = "img/voltel.png";
            imgLogo.style.width='110'
            imgLogo.style.height='auto'
            main.style.top='-25px'
        }
    });
});

//ajustar imagen slider segun pantalla
function setDimensions(){
    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;
    let sliderImg = $('.section-slider img');
    sliderImg.css('height', windowsHeight + 'px');
    sliderImg.css('width', windowsWidth + 'px');
    $('.sidenav').css('height', windowsHeight + 'px');
}

//when resizing the site, we adjust the heights of the sections
$(window).resize(function() {
    setDimensions();
});

setDimensions();

