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
let sliderImg = $('.uk-slideshow-items img');

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > sliderImg.innerHeight()-155) {
            $("header nav").addClass('navColor');
            imgLogo.src = "img/voltel_2.png";
            imgLogo.style.width = '65px';
            imgLogo.style.height = 'auto'
        } else {
            $("header nav").removeClass('navColor');
            imgLogo.src = "img/voltel.png";
            imgLogo.style.width = '110px';
            imgLogo.style.height = 'auto';
        }
    });
});

//ajustar imagen slider segun pantalla
function setDimensions(){

    let windowsHeight = window.innerHeight;
    let windowsWidth = window.innerWidth;
    let slider = $('.uk-slideshow-items');
    let overlay2 = $('.uk-overlay2');

    slider.css('height', windowsHeight + 'px');
    slider.css('width', windowsWidth + 'px');

    sliderImg.css('height', windowsHeight + 'px');
    sliderImg.css('width', windowsWidth + 'px');

    overlay2.css('top', windowsHeight-90 + 'px');
    overlay2.css('left', windowsWidth/2-65 + 'px');

    $('.sidenav').css('height', windowsHeight + 'px');

    //sub sections img
    img.css('width', windowsWidth + 'px');
}

//when resizing the site, we adjust the heights of the sections
$(window).resize(function() {
    setDimensions();
});

setDimensions();

//eventos para el email
let email = document.getElementById('inputEmail4');
let errormsg = document.getElementById('emailerror');

let status = "";

email.addEventListener("keyup", function () {

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(email.value)) {

        status = "yes";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        email.classList.remove("bg-danger");
        email.classList.remove("text-white");

    } else {

        status = "not";
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        errormsg.classList.add("d-none");
    }
});

// ajax para prevenir que el php muestre su pagina
$(document).ready(function() {
    $('#form').submit(function(e){
        if (status === "yes" && email!=='') {
            e.preventDefault();
            var formData = new FormData(this);
            $.ajax({
                type: 'post',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                url: "form_contact.php", // FICHERO DONDE ESTA LA LOGICA DEL ENVIO, este devuelve un array algo asi $return['status'] = 1 si lo envia ò $return['status'] = 0 si falla
                success: function (data) {
                    data = JSON.parse(data)
                    if (data.result == true) {
                        // el email se ha enviado correctamente
                        setTimeout(function () {
                            swal("Bien!", "Tu mensaje ha sido enviado correctamente", "success");
                        }, 200);
                        $('#form')[0].reset();
                        email.style.border = "initial";
                        email.classList.remove("is-valid");
                    } else {
                        // no se ha podido enviar el email
                        setTimeout(function () {
                            swal("Algo va mal...", "Tu mensaje no ha podido ser enviado, revisa y prueba de nuevo", "error");
                        }, 200);
                    }
                }
            });
        } else {
            e.preventDefault();
            email.classList.add("bg-danger");
            email.classList.add("text-white");
            errormsg.classList.remove("d-none");
        }
    });
});
