import React from 'react';
import Cartelera from '../componentes/Cartelera';

export default class Estrenos extends React.Component{


    render(){
        return(
            <>
                <h2>Estrenos del Mes</h2>
                <Cartelera 
                img = "/peliculas/Chucky.jpeg"
                titulo = "Chucky"
                descripcion = "Chucky es una película de terror sobre un muñeco llamado Chucky que cobra vida y comienza a aterrorizar a una familia. La historia comienza cuando un asesino en serie utiliza magia negra para transferir su alma a un muñeco de juguete poco antes de morir. Una vez que el muñeco es comprado por la familia Barclay como regalo para su hijo, Chucky comienza a actuar de manera extraña y a mostrar signos de vida propia. A medida que el muñeco se vuelve cada vez más violento, la madre del niño comienza a investigar la verdadera naturaleza del juguete y descubre la terrible verdad detrás de su creación."
                />
                <Cartelera
                img = "/peliculas/Love Actually.jpeg"
                titulo = "Love Actually"
                descripcion = "Love Actually es una película romántica que cuenta varias historias interconectadas sobre el amor y las relaciones durante la temporada navideña. La trama sigue a varios personajes, incluyendo un primer ministro británico, un escritor de comedias que se enamora de su doble de cuerpo, una pareja casada que experimenta una crisis matrimonial y un joven que intenta conquistar a su compañera de trabajo. A través de estas historias, la película explora temas como la amistad, la lealtad, la infidelidad y la esperanza en el amor."
                />
                <Cartelera
                img = "/peliculas/Shrek.jpeg"
                titulo = "Shrek"
                descripcion = "Shrek es una película de animación digital de 2001, dirigida por Andrew Adamson y Vicky Jenson. La historia sigue a un ogro solitario llamado Shrek, quien es enviado por el malvado Lord Farquaad a rescatar a la princesa Fiona de una torre custodiada por un dragón. En el camino, Shrek se hace amigo de un burro parlante y se enamora de Fiona, quien esconde un secreto sorprendente. La película combina humor irreverente y emociones conmovedoras para contar una historia divertida y con moraleja sobre la verdadera belleza y la aceptación de uno mismo."
                />
            </>
        )
    }

}
