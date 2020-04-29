class Pform extends React.Component {
    constructor(props) {
        super();
        this.state = {
            check:'',
            status:'',
            email:'',
            checkPhone:'',
            statusPhone:'',
        };
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPhone = this.checkPhone.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //CAPTCHA
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;

        document.body.appendChild(script);

        //ALERT
        const scriptSweet = document.createElement("script");
        scriptSweet.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
        scriptSweet.async = true;

        document.body.appendChild(scriptSweet);
    }

    checkEmail(e) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (regexEmail.test(e)) {
            this.setState({check: 'is-valid'})
            this.setState({status: true})
        } else {
            this.setState({check: 'is-invalid'})
            this.setState({status: false})
        }
    }

    checkPhone(e) {
        let regexEmail = /(\+34|34)?[1-9]{1}[0-9]{8}/;

        if (regexEmail.test(e)) {
            this.setState({checkPhone: 'is-valid'})
            this.setState({statusPhone: true})
        } else {
            this.setState({checkPhone: 'is-invalid'})
            this.setState({statusPhone: false})
        }
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.statusPhone && this.state.status && this.state.email!==''){
            const formData = new FormData(e.target);
            $.ajax({
                type: 'post',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                url: "php/form_contact.php",
                success: function (data) {
                    data = JSON.parse(data)
                    if (data.result == true) {
                        setTimeout(function () {
                            swal("Bien!", "Tu mensaje ha sido enviado correctamente", "success");
                        }, 200);
                        $("#presuForm")[0].reset();
                    } else {
                        setTimeout(function () {
                            swal("Algo va mal...", "Tu mensaje no ha podido ser enviado, revisa y prueba de nuevo", "error");
                        }, 200);
                    }
                }
            });
            this.setState({email: ''});
            this.setState({check: ''});
            this.setState({checkPhone: ''});
            this.setState({status: ''});
            this.setState({statusPhone: ''});
        }
    }

    render() {
        return (
            <React.Fragment>
                <form action="#" id="presuForm" onSubmit={(e) => this.handleClick(e)}>
                    {location.pathname.includes('contacto') === true && (
                        <React.Fragment><h3 className="uk-card-title text-secondary text-center">Contacta con nuestro equipo</h3>
                            <h5 className="text-center text-muted mt-2 mb-5">Nos encanta recibir nuevas ideas. Cuéntanos
                                tu proyecto</h5>
                        </React.Fragment>)}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Nombre *</label>
                            <input type="text" className="form-control" id="inputName" name="nombre" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Empresa</label>
                            <input type="text" className="form-control" name="empresa" id="inputEmpre"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Teléfono *</label>
                            <input type="tel" className={`form-control ${this.state.checkPhone}`} id="inputPassword4" name="telefono" onKeyUp={(e)=>this.checkPhone(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email *</label>
                            <input type="email" className={`form-control ${this.state.check}`} value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} id="inputEmail4" name="email" required onKeyUp={(e)=>this.checkEmail(e.target.value)}/>
                        </div>
                    </div>
                    {!location.pathname.includes('contacto')===true && (
                    <div className="form-group">
                        <label htmlFor="inputEmail4">Servicio *</label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="servicio">
                            <option selected value="Instalacion de Redes Cableadas y WIFI">Instalación de Redes Cableadas y WIFI</option>
                            <option value="Certificacion de cable UTP">Certificación de cable UTP</option>
                            <option value="Domotica">Domótica</option>
                            <option value="Electricidad">Electricidad</option>
                            <option value="CCTV e Intrusion">CCTV e Intrusión</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>)}
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Texto *</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="texto" required>
                            </textarea>
                        </div>
                        <div className="form-group">
                            <div className="custom-control mt-4 mb-4 custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Acepto el <a href="aviso.html" target="_blank" className="font-weight-bold">aviso legal y la política de privacidad</a> *</label>
                            </div>
                        </div>
                        <div className="g-recaptcha mt-1 mb-4" data-sitekey="6LdF2-gUAAAAAKGVLNBC6j6Iao3Xw-ganxVnEbmo"/>
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                        <br/><br/>
                        <p><small>De acuerdo a lo establecido por la Ley Orgánica 15/1999, de 13 de diciembre, de
                            Protección de Datos de Carácter Personal (LOPD), el cliente/usuario queda informado y presta su
                            consentimiento a la incorporación de sus datos a un fichero del que es responsable Soluciones Voltel S.L
                            habiendo sido debidamente inscrito en la Agencia Española de Protección de Datos con la finalidad de informarle sobre los productos y servicios
                            solicitados, así como de enviarle comunicaciones comerciales sobre los mismos. Le informamos
                            también sobre sus derechos de acceso, rectificación, cancelación y oposición, que podrá ejercer en
                            el dominio social de Acacias, 1 28295 Valdemaqueda - Madrid. Le informamos además de que los datos
                            personales suministrados no serán cedidos ni comunicados a terceros.</small></p>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Pform/>,
    document.getElementById("PresupuestoForm")
);
