import React from 'react';
import Buscapeli from '../componentes/Buscapeli';



export default class Buscador extends React.Component{

    render(){
        return(
            <>
                <h2>Encuentra la informacion que buscas de tu pelicula Favorita</h2>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <Buscapeli/>
                    </div>
                </div>
            </>
        )
    }
}