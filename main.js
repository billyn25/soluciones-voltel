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
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > window.innerHeight - 90) {
            $("header nav").addClass('bg-primary');
        } else {
            $("header nav").removeClass('bg-primary');
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

