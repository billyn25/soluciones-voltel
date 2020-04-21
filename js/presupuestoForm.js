class Pform extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <form action="#">
                    <h1 className="text-center text-white mb-5 ">Pide Presupuesto sin compromiso</h1>
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
                            <input type="tel" className="form-control" id="inputPassword4" name="telefono"
                                   pattern="(\+34|34)?[1-9]{1}[0-9]{8}" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email *</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" required/>
                            <div id="emailerror" className="invalid-feedback">El email no tiene un formato
                                correcto
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail4">Servicio *</label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Instalación de Redes WIFI</option>
                            <option value="1">Certificación cable UTP</option>
                            <option value="2">Domótica</option>
                            <option value="3">Electricidad</option>
                            <option value="4">CCTV e Intrusión</option>
                            <option value="5">Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Texto *</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="texto"
                                      required>
                            </textarea>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                                <label className="custom-control-label" htmlFor="customCheck1">Acepto el <a
                                    className="text-warning font-weight-bold"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-xl">aviso legal y la política de privacidad</a> *</label>
                            </div>
                        </div>
                        <div className="g-recaptcha mt-1 mb-3" data-sitekey="6LdF2-gUAAAAAKGVLNBC6j6Iao3Xw-ganxVnEbmo"/>
                        <button type="submit" className="btn btn-outline-warning">Enviar</button>
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
