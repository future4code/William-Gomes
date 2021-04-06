import axios from 'axios';
import React from 'react';



export default class PrecoFiltrado extends React.Component{

    render(){
        return(
            <div>
            <h1>Atividade Filtrada</h1>
            <input
            value = ""
            ></input>
            <input
            value = ""
            ></input>
            <button>Requisitar</button>
           </div>
        )
    }
}