import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (

        <div className = "littlecard-container">
            <div>
          
        <p> {props.endereço} </p>
            <p>{props.texto}</p>
            </div>
        </div>
    )
}
export default CardPequeno;