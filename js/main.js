//ajustar imagen slider segun pantalla
function setDimensions() {

    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;
    let slider = $('.uk-slideshow-items');
    let overlay2 = $('.uk-overlay2');
    let sliderImg = $('.uk-slideshow-items img');
    let overlayCenter = $('.center');

    slider.css('height', windowsHeight + 'px');
    slider.css('width', windowsWidth + 'px');

    //center overlay info and arrow indicators of slider index
    overlayCenter.css('top', windowsHeight/2 + 'px');

    sliderImg.css('height', windowsHeight + 'px');
    sliderImg.css('width', windowsWidth + 'px');

    overlay2.css('top', windowsHeight - 90 + 'px');
    overlay2.css('left', windowsWidth / 2 - 65 + 'px');

    $('.sidenav').css('height', windowsHeight + 'px');
}

//when resizing the site, we adjust the heights of the sections
$(window).resize(function () {
    setDimensions();
});

setDimensions();
