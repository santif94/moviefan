import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{

    render(){
        return(
            <>
                <div className="row bg-light">
                    <div className='col-12 d-flex align-items-center'>
                        <Link to="/" className='m-2'>Inicio</Link>
                        <Link to="/estrenos" className='m-2'>Estrenos</Link>
                        <Link to="/buscador" className='m-2'>Buscador</Link>
                        <Link to="/contacto" className='m-2'>Contacto</Link>
                    </div>
                </div>
            </>
        )
    }

}

