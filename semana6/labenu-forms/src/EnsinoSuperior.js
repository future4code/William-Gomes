import React from "react";
import App from './App';
import EnsinoNaoSuperior from './EnsinoNaoSuperior'



export default class EnsinoSuperior extends React.Component {

    render(){
        return(
            <div>
            <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
              <ol>
                
                <li>Qual curso?</li>
                <input type = "text"></input>
  
                <li>Qual a unidade de ensino?</li>
                <input type = "text"></input>
              
              </ol>
  
              
          </div>

        )
            
    }





}