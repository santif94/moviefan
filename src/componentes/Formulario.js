import React from 'react';
import '../App.css';

export default class Formulario extends React.Component{

    render(){
        return(
            <>
                <form className="was-validated mt-4">
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Cuentanos mas sobre ti</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Complete aqui" required></textarea>
                        <div class="invalid-feedback">
                        Para enviar este formulario debe completar una valoracion en el cuadro superior.
                        </div>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
                        <label class="form-check-label" for="validationFormCheck1">Soy mayor de edad</label>
                        <div class="invalid-feedback">Debes ser mayor de edad para suscribirte</div>
                    </div>

                    <div className="form-check">
                        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                        <label class="form-check-label" for="validationFormCheck2">Suscribirme a la newsletter para recibir todas las novedades</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
                        <label class="form-check-label" for="validationFormCheck3">Solo quiero recibir correos cuando haya estrenos</label>
                        <div class="invalid-feedback">Elige una opcion para poder enviar el formulario</div>
                    </div>

                    <div className="mb-3">
                        <select class="form-select" required aria-label="select example">
                        <option value=""></option>
                        <option value="1">Accion</option>
                        <option value="2">Dibujos animados</option>
                        <option value="3">Comedia Romantica</option>
                        <option value="4">Comedia</option>
                        <option value="5">Terror</option>
                        <option value="6">Documental</option>
                        </select>
                        <div class="invalid-feedback">Elige el genero que mas te guste</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tu correo electronico</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>

                    <div className="mb-3">
                        <button class="btn btn-primary" type="submit">Enviar Solicitud</button>
                    </div>
                </form>
            </>
        )
    }

}