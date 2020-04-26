class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            active: "",
            logo:"big"
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick);
        window.addEventListener('scroll', this.handleScroll);

        //set scrooll
        window.pageYOffset > this.props.sizeSlider-155
            ?this.setState({logo: 'small'})
            :this.setState({logo: 'big'});
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick);
    }

    openNav() {
        this.setState({active: 'is-active'});
    }

    closeNav() {
        this.setState({active: ''});
    }

    //click fuera del nav para cerrarlo
    handleClick(e) {
        if (this.state.active === 'is-active' && this.node && !this.node.contains(e.target)) {
            this.setState({active: ''});
        }
    }

    handleScroll() {
        window.pageYOffset > this.props.sizeSlider-155
            ?this.setState({logo: 'small'})
            :this.setState({logo: 'big'});
    }

    render() {

        return (
            <nav className={this.state.logo==='big'?'navbar navbar-expand-lg navbar-dark fixed-top d-flex justify-content-between':'navColor navbar navbar-expand-lg navbar-dark fixed-top d-flex justify-content-between'}>
                <a href="index.html" className="text-white">
                    <img id="logo" src={this.state.logo==='big'?'img/icon/voltel.png':'img/icon/voltel_2.png'}
                         alt="voltel logo" className={this.state.logo==='big'?'logoBig':'logoSmall'}/>
                </a>
                <div id="mySidenav" ref={node => this.node = node} className={`sidenav text-right ${this.state.active}`}>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" id="buttonX" className="closebtn" onClick={this.closeNav}>&times;</a>
                        </li>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item text-white" href="redes.html">
                                    <img src="img/icon/wifi.svg"  width="20" height="20" className="mr-3"/>INSTALACIÓN DE REDES</a>
                                <a className="dropdown-item text-white" href="certificaciones.html">
                                    <img src="img/icon/correcto.svg" width="20" height="20" className="mr-3"/>CERTIFICACIONES UTP</a>
                                <a className="dropdown-item text-white" href="domotica.html">
                                    <img src="img/icon/smart-house.svg" width="20" height="20" className="mr-3"/>DOMÓTICA</a>
                                <a className="dropdown-item text-white" href="electricidad.html">
                                    <img src="img/icon/trueno.svg" width="20" height="20" className="mr-3"/>ELECTRICIDAD</a>
                                <a className="dropdown-item text-white" href="cctv.html">
                                    <img src="img/icon/cctv.svg" width="20" height="20" className="mr-3"/>CCTV E INTRUSIÓN</a>
                            </div>
                        </li>
                        <li><a href="proyectos.html">Proyectos</a></li>
                        <li><a href="nosotros.html">Sobre nosotros</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                    <div className="w-100 d-flex justify-content-center pb-5 pt-5">
                        <hr className="border-white"/>
                    </div>
                    <div className="form-inline justify-content-end">
                        <a href="mailto:administracion@solucionesvoltel.com" uk-icon="mail" className="border-white border rounded-circle ml-3 p-2"></a>
                        <a href="javascript:" uk-icon="linkedin" uk-tooltip="title: Aún no tenemos Linkedin; delay: 500" className="border-white border rounded-circle p-2"></a>
                        <a href="javascript:" uk-icon="facebook" uk-tooltip="title: Aún no tenemos Facebook; delay: 500" className="border-white border  rounded-circle p-2"></a>
                        <a href="javascript:" uk-icon="twitter" uk-tooltip="title: Aún no tenemos twitter; delay: 500" className="border-white border  rounded-circle p-2"></a>
                    </div>
                </div>
                <div id="main">
                    <button className="navbar-toggler" type="button" onClick={this.openNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }
}

let sliderImg = $('.uk-slideshow-items img');

ReactDOM.render(
    <Header sizeSlider={sliderImg.innerHeight()}/>,
    document.getElementById("Home")
);
