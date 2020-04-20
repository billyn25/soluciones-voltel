class Services extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
            <div className="uk-child-width-1-5@m uk-grid-small uk-grid-match" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-secondary uk-card-hover">
                        <a href="redes.html">
                            <img src="img/wifi.jpg" alt="voltel redes wifi o cable" className="uk-cover-container w-100 h-100"/>
                                <div className="uk-overlay uk-overlay-primary uk-position-center uk-light w-auto flex-nowrap">
                                    <h5>INSTALACIÓN DE REDES</h5>
                                </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-hover">
                        <a href="certificaciones.html">
                            <img src="img/red_seccion.png" alt="voltel certificaciones utp" className="uk-cover-container w-100 h-100"/>
                                <div className="uk-overlay uk-overlay-primary uk-position-center uk-light w-auto flex-nowrap">
                                    <h5>CERTIFICACIONES UTP</h5>
                                </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-hover">
                        <a href="domotica.html">
                            <img src="img/domotica_section.jpg" alt="voltel domótica" className="uk-cover-container w-100 h-100"/>
                                <div
                                    className="uk-overlay uk-overlay-primary uk-position-center uk-light w-auto flex-nowrap">
                                    <h5>DOMÓTICA</h5>
                                </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-hover">
                        <a href="electricidad.html">
                            <img src="img/electricidad.jpg" alt="voltel electricidad" className="uk-cover-container w-100 h-100"/>
                                <div
                                    className="uk-overlay uk-overlay-primary uk-position-center uk-light w-auto flex-nowrap">
                                    <h5>ELECTRICIDAD</h5>
                                </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-hover">
                        <a href="cctv.html">
                            <img src="img/cctv.jpg" alt="voltel cctv alarmas" className="uk-cover-container w-100 h-100"/>
                                <div className="uk-overlay uk-overlay-primary uk-position-center uk-light w-auto flex-nowrap">
                                    <h5>CCTV E INTRUSIÓN</h5>
                                </div>
                        </a>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Services/>,
    document.getElementById("miniservices")
);

