import React from 'react';
import NetflixCarousel from '../componentes/Carrousel';
import "../App.css";

export default class Inicio extends React.Component {

    render(){
        return(
            <>
                <div className="container overflow-hidden">
                    <div className='row'>
                        <div className='col-12'>
                            <h1>MOVIE-FAN</h1>
                            <p> Si eres un cinefilo apasionado, disfrutaras de esta pagina web. 
                            Encotraras toda la informacion sobre los clasicos y estrenos de la pantalla grande</p>                        
                        </div>
                        <div className='col-3'></div>
                        <div className='col-6'>
                            <NetflixCarousel />
                        </div>
                    </div>
                </div>

            </>
    
        )
    }

}

