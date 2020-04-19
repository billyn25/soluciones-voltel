class Footer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            visible:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleClick() {
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    handleScroll() {
        window.pageYOffset > this.props.sizeSlider-155
            ?this.setState({visible: true})
            :this.setState({visible: false});

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="footer_content">
                        <div className="row">
                            <div className="col">
                                <div className="footer_logo text-center">
                                    <a href="javascript:" onClick={this.handleClick}><img src="img/voltel.png" width="140" height="140" alt="logo voltel"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="row footer_row">
                            <div className="col-lg-4 footer_col">
                                <div className="footer_item text-center">
                                    <div
                                        className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                        <div><img src="img/phone.png" alt=""/></div>
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
                                    <div
                                        className="footer_icon d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                        <div><img src="img/mail.png" alt="" /></div>
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
                                        <div><img src="img/contact.png" alt=""/></div>
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
                        Copyright &copy;{(new Date().getFullYear())} - Soluciones Voltel. Todos los derechos reservados.
                    </div>
                </div>
                <a href="javascript:" className={this.state.visible?'fadeIn':'fadeOut'} onClick={this.handleClick} id="return-to-top"><i className="icon-chevron-up"></i></a>
                <a href="https://api.whatsapp.com/send?phone=34660621502" className="float d-noneW" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
                <a href="tel:+34660621502" className="float2 d-noneW">
                    <i className="fa fa-phone my-float"></i>
                </a>
            </React.Fragment>
        )
    }
}

let sliderImg = $('.uk-slideshow-items img');

ReactDOM.render(
    <Footer sizeSlider={sliderImg.innerHeight()}/>,
    document.getElementById("footer")
);
