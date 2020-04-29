class Footer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            visible:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.checkAcceptCookies = this.checkAcceptCookies.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        //check cookies
        this.checkAcceptCookies();
    }

    handleClick() {
        //back to top
        $(document).ready(function () {
            // scroll body to 0px on click
            let scroolHtml = $('body,html');
            scroolHtml.animate({
                    scrollTop: 0
                }, 1200);
                return false;
            });
    }

    handleScroll() {
        window.pageYOffset > this.props.sizeSlider-155
            ?this.setState({visible: true})
            :this.setState({visible: false});
    }

    //cookies
    checkAcceptCookies() {
        if (localStorage.acceptCookies == 'true') {
        } else {
            $('#div-cookies').show();
        }
    }

    render() {

        function acceptCookies() {

            localStorage.acceptCookies = 'true';
            $('#div-cookies').hide();
        }

        return (
            <React.Fragment>
                <div className="container">
                    <div className="footer_content">
                        <div className="row">
                            <div className="col">
                                <div className="footer_logo text-center">
                                    <a href="javascript:" onClick={this.handleClick}><img id="logo" src="img/icon/voltel.png" width="140" height="140" alt="logo voltel"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <ul className="list-group list-group-horizontal d-flex justify-content-around align-items-end">
                                    <li className="text-center p-2">
                                        <img src="img/marcas/knx_logo.svg" alt="knx" width="60" height="60"/>
                                        <p className="text-white font-weight-bold mt-2">Integrador domótico nº 69.767</p>
                                    </li>
                                    <li className="text-center p-2">
                                        <p className="text-white font-weight-bold">Electricistas autorizados nº 203.407</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row footer_row">
                            <div className="col-lg-4 footer_col">
                                <div className="footer_item text-center">
                                    <div className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                        <div><img src="img/icon/phone.png" alt=""/></div>
                                    </div>
                                    <div className="footer_title">Móvil</div>
                                    <div className="footer_list">
                                        <ul className="p-0">
                                            <li className="text-center">
                                                <span className="uk-margin-small-right" uk-icon="whatsapp"></span>+34 660 621 502
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 footer_col">
                                <div className="footer_item text-center">
                                    <div className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                        <div><img src="img/icon/mail.png" alt="" /></div>
                                    </div>
                                    <div className="footer_title">e-mail</div>
                                    <div className="footer_list">
                                        <ul className="p-0">
                                            <li>administración@solucionesvoltel.com</li>
                                            <li>info@solucionesvoltel.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 footer_col">
                                <div className="footer_item text-center">
                                    <div
                                        className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                        <div><img src="img/icon/contact.png" alt=""/></div>
                                    </div>
                                    <div className="footer_title">localización</div>
                                    <div className="footer_list">
                                        <ul className="p-0">
                                            <li>Acacias, 1</li>
                                            <li>28295 Valdemaqueda ( Madrid )</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bar d-flex justify-content-center text-center">
                    <div className="copyright">
                        <p>Copyright &copy;{(new Date().getFullYear())} - Soluciones Voltel | <a className="text-light" href="contacto.html" target="_blank">Contacto </a>|<a className="text-light font-weight-bold" href="aviso.html" target="_blank"> Aviso legal y Política de privacidad</a></p>
                    </div>
                </div>
                <a href="javascript:" className={this.state.visible?'fadeIn':'fadeOut'} onClick={this.handleClick} id="return-to-top"><i className="icon-chevron-up"></i></a>
                <a href="https://api.whatsapp.com/send?phone=34660621502" className="float d-noneW" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
                <a href="tel:+34660621502" className="float2 d-noneW">
                    <i className="fa fa-phone my-float"></i>
                </a>
                    <div id="div-cookies" className="alert fixed-bottom alert-dismissible alert-warning p-3 mb-0 alert-heading">
                    Necesitamos usar cookies para que funcione todo correctamente, si permanece aquí acepta su uso, más información en <a hrefLang="es" className="font-weight-bold alert-link" href="aviso.html" target="_blank">Aviso Legal y Política de Privacidad</a>.
                    <button type="button" className="btn btn-outline-danger m-1 pt-2 pb-2" onClick={acceptCookies}>
                        Acepto el uso de cookies
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

let sliderImg = $('.uk-slideshow-items img');
ReactDOM.render(
    <Footer sizeSlider={sliderImg.innerHeight()}/>,
    document.getElementById("footer")
);
