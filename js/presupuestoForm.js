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
        }
    }

    render() {
        return (
            <React.Fragment>
                <form action="#" id="presuForm" onSubmit={(e)=>this.handleClick(e)}>
                    <h1 className="text-center text-white mb-5">Formulario para Presupuesto</h1>
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
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Texto *</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="texto" required>
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
                        <button type="submit" className="btn btn-primary">Enviar</button>
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
                <div className="modal fade bd-example-modal-xl" tabIndex={-1} role="dialog" aria-labelledby="myExtraLargeModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Aviso Legal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Cerrar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-secondary">
                                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
                                    la Información y Comercio Electrónico, a continuación se exponen los datos identificativos de la
                                    empresa. <strong>Soluciones Voltel S.L</strong> es una empresa dedicada al sector de empresas
                                    instaladoras de telecomunicación, cuyo domicilio social se halla ubicado en <strong>Acacias, 1 -
                                        28295 Valdemaqueda ( Madrid )</strong>. Con este aviso legal se regula el acceso y el uso, y la relación entre este sitio al cual se
                                    puede acceder en la dirección de Internet www.solucionesvoltel.com (en adelante website), y los usuarios de www.solucionesvoltel.com (en
                                    adelante usuarios).</p>
                                <p className="text-primary font-weight-bolder">DATOS FISCALES</p>
                                <p>Razon Social: Soluciones Voltel S.L<br/>
                                    El CIF: B-88466875T<br/>
                                    Tel : +34 660 621 502<br/>
                                    E-mail: administracion@solucionesvoltel.com</p>
                                <p>El objetivo de este sitio Web es facilitar al público en general el conocimiento de las
                                    actividades que la empresa realiza y los servicios que presta.</p>
                                <p className="text-primary font-weight-bolder">Propiedad intelectual de este sitio</p>
                                <p>Este Website se reserva el derecho de efectuar, en cualquier momento y sin necesidad de previo
                                    aviso, modificaciones y actualizaciones de la información contenida en su web o en la
                                    presentación de ésta.</p>
                                <p>La utilización no autorizada de la información contenida en este website, así como la lesión de
                                    los derechos de Propiedad, dará lugar a las responsabilidades legalmente establecidas.</p>
                                <p className="text-primary font-weight-bolder">Contenido de la Web y enlaces</p>
                                <p>Tanto el acceso a este Website como el uso que puedan hacer de la información contenida en el
                                    mismo es de exclusiva responsabilidad de los usuarios. El Website no responderá de ninguna
                                    consecuencia, daño o perjuicio que pueda derivarse de dicho acceso o uso de la información.</p>
                                <p>Este Website no se hace responsable de los posibles daños que puedan causarse al sistema
                                    informático del usuario, ni de los posibles errores de seguridad que se puedan producir o los
                                    daños en los ficheros almacenados en el mismo, como consecuencia de la presencia de virus en el
                                    ordenador del usuario utilizado para la conexión a los servicios y contenidos del Website, asi
                                    como de un mal funcionamiento del navegador.</p>
                                <p>El Usuario es, en definitiva, el único responsable del uso que realice de los servicios,
                                    contenidos en este website: enlaces (links) e hipertexto incluidos el presente sitio web.</p>
                                <p className="text-primary font-weight-bolder">Legislación y jurisdicción aplicables</p>
                                <p>Con carácter general, las relaciones con nuestros clientes, que se deriven de la prestación de
                                    los servicios contenidos en nuestra web, están sometidas a la legislación y la jurisdicción
                                    española. Los usuarios de esta web son conscientes de todo lo expuesto y lo aceptan
                                    voluntariamente.</p>
                                <p className="text-primary font-weight-bolder">SUS DATOS SEGUROS</p>
                                <p>Información en cumplimiento de la normativa de protección de datos personales</p>
                                <p>En Europa y en España existen normas de protección de datos pensadas para proteger su información
                                    personal de obligado cumplimiento para nuestra entidad.</p>
                                <p>Por ello, es muy importante para nosotros que entienda perfectamente qué vamos a hacer con los
                                    datos personales que le pedimos.</p>
                                <p>Así, seremos transparentes y le daremos el control de sus datos, con un lenguaje sencillo y
                                    opciones claras que le permitirán decidir qué haremos con su información personal.</p>
                                <p>Por favor, si una vez leída la presente información le queda alguna duda, no dude en
                                    preguntarnos. Muchas gracias por su colaboración.</p>
                                <p><em><strong>• ¿Para qué vamos a usar sus datos?</strong></em></p>
                                <p>Con carácter general, sus datos personales serán usados para poder relacionarnos con usted y
                                    poder prestarle nuestros servicios. Asimismo, también pueden ser usados para otras actividades,
                                    como enviarle publicidad o promocionar nuestras actividades.</p>
                                <p><em><strong>• ¿Por qué necesitamos usar sus datos?</strong></em></p>
                                <p>Sus datos personales son necesarios para poder relacionarnos con usted y poder prestarle nuestros
                                    servicios. En este sentido, pondremos a su disposición una serie de casillas que le permitirán
                                    decidir de manera clara y sencilla sobre el uso de su información personal.</p>
                                <p><strong><em>• ¿Quién va a conocer la información que le pedimos?</em></strong></p>
                                <p>Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá
                                    tener conocimiento de la información que le pedimos.</p>
                                <p>De igual modo, podrán tener conocimiento de su información personal aquellas entidades que
                                    necesiten tener acceso a la misma para que podamos prestarle nuestros servicios. Así por
                                    ejemplo, nuestro banco conocerá sus datos si el pago de nuestros servicios se realiza mediante
                                    tarjeta o transferencia bancaria.</p>
                                <p>Asimismo, tendrán conocimiento de su información aquellas entidades públicas o privadas a las
                                    cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna
                                    ley. Poniéndole un ejemplo, la Ley Tributaria obliga a facilitar a la Agencia Tributaria
                                    determinada información sobre operaciones económicas que superen una determinada cantidad.</p>
                                <p>En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer su
                                    información personal a otras entidades, le solicitaremos previamente su permiso a través de
                                    opciones claras que le permitirán decidir a este respecto.</p>
                                <p><strong><em>• ¿Cómo vamos a proteger sus datos?</em></strong></p>
                                <p>Protegeremos sus datos con medidas de seguridad eficaces en función de los riesgos que conlleve
                                    el uso de su información. Para ello, nuestra entidad ha aprobado una Política de Protección de
                                    Datos y se realizan controles y auditorías anuales para verificar que sus datos personales están
                                    seguros en todo momento.</p>
                                <p><strong><em>• ¿Enviaremos sus datos a otros países?</em></strong></p>
                                <p>En el mundo hay países que son seguros para sus datos y otros que no lo son tanto. Así por
                                    ejemplo, la Unión Europea es un entorno seguro para sus datos. Nuestra política es no enviar su
                                    información personal a ningún país que no sea seguro desde el punto de vista de la protección de
                                    sus datos.</p>
                                <p>En el caso de que, con motivo de prestarle el servicio, sea imprescindible enviar sus datos a un
                                    país que no sea tan seguro como España, siempre le solicitaremos previamente su permiso y
                                    aplicaremos medidas de seguridad eficaces que reduzcan los riesgos del envío de su información
                                    personal a otro país.</p>
                                <p><strong><em>• ¿Durante cuánto tiempo vamos a conservar sus datos?</em></strong></p>
                                <p>Conservaremos sus datos durante nuestra relación y mientras nos obliguen las leyes. Una vez
                                    finalizados los plazos legales aplicables, procederemos a eliminarlos de forma segura y
                                    respetuosa con el medio ambiente.</p>
                                <p><strong><em>• ¿Cuáles son sus derechos de protección de datos?</em></strong></p>
                                <p>En cualquier momento puede dirigirse a nosotros para saber qué información tenemos sobre usted,
                                    rectificarla si fuese incorrecta y eliminarla una vez finalizada nuestra relación, en el caso de
                                    que ello sea legalmente posible.</p>
                                <p>También tiene derecho a solicitar el traspaso de su información a otra entidad. Este derecho se
                                    llama “portabilidad” y puede ser útil en determinadas situaciones.</p>
                                <p>Para solicitar alguno de estos derechos, deberá realizar una solicitud escrita a nuestra
                                    dirección, junto con una fotocopia de su DNI, para poder identificarle.</p>
                                <p>En las oficinas de nuestra entidad disponemos de formularios específicos para solicitar dichos
                                    derechos y le ofrecemos nuestra ayuda para su cumplimentación.</p>
                                <p>Para saber más sobre sus derechos de protección de datos, puede consultar la página web de la
                                    Agencia Española de Protección de Datos (www.agpd.es).</p>
                                <p><em><strong>• ¿Puede retirar su consentimiento si cambia de opinión en un momento
                                    posterior?</strong></em></p>
                                <p>Usted puede retirar su consentimiento si cambia de opinión sobre el uso de sus datos en cualquier
                                    momento.</p>
                                <p>Así por ejemplo, si usted en su día estuvo interesado/a en recibir publicidad de nuestros
                                    productos o servicios, pero ya no desea recibir más publicidad, puede hacérnoslo constar a
                                    través del formulario de oposición al tratamiento disponible en las oficinas de nuestra
                                    entidad.</p>
                                <p><strong><em>• En caso de que entienda que sus derechos han sido desatendidos, ¿dónde puede
                                    formular una reclamación?</em></strong></p>
                                <p>En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede
                                    formular una reclamación en la Agencia Española de Protección de Datos, a través de alguno de
                                    los medios siguientes:</p>
                                <p>o Sede electrónica: www.agpd.es</p>
                                <p>o Dirección postal: Agencia Española de Protección de Datos C/ Jorge Juan, 6 28001-Madrid</p>
                                <p>o Vía telefónica: Telf. 901 100 099 Telf. 91 266 35 17</p>
                                <p>Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y
                                    no es necesaria la asistencia de abogado ni procurador.</p>
                                <p><em><strong>• ¿Elaboraremos perfiles sobre usted?</strong></em></p>
                                <p>Nuestra política es no elaborar perfiles sobre los usuarios de nuestros servicios.</p>
                                <p>No obstante, pueden existir situaciones en las que, con fines de prestación del servicio,
                                    comerciales o de otro tipo, necesitemos elaborar perfiles de información sobre usted. Un ejemplo
                                    pudiera ser la utilización de su historial de compras o servicios para poder ofrecerle productos
                                    o servicios adaptados a sus gustos o necesidades.</p>
                                <p>En tal caso, aplicaremos medidas de seguridad eficaces que protejan su información en todo
                                    momento de personas no autorizadas que pretendan utilizarla en su propio beneficio.</p>
                                <p><strong><em>• ¿Usaremos sus datos para otros fines?</em></strong></p>
                                <p>Nuestra política es no usar sus datos para otras finalidades distintas a las que le hemos
                                    explicado. Si, no obstante, necesitásemos usar sus datos para actividades distintas, siempre le
                                    solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir al
                                    respecto.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Pform/>,
    document.getElementById("PresupuestoForm")
);
