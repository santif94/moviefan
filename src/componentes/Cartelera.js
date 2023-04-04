import React from "react";

export default class Cartelera extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row ">
                <div className="col-12 d-flex align-items-center m-2 band-thumb">
                    <img src={this.props.img} alt="."/>
                    <div className="p-2">
                        <h2>{this.props.titulo}</h2>
                        <p>{this.props.descripcion}</p>
                    </div>
                </div>

            </div>
        )
    }
}