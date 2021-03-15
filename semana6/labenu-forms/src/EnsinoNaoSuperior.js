import React from "react";
import App from './App';

export default class EnsinoNaoSuperior extends React.Component {

    render(){
        return(
            <div>
                <h1>ETAPA 3 - INFORMÇÕES GERAIS DE ENSINO</h1>
                <ol>
                
                <li>Por que você não terminou um curso de graduação?</li>
                <input type = "text"></input>
  
                <li>Você fez algum curso complementar?</li>
                <select>
                    <option value = "nada">Nenhum</option>
                    <option value = "ct">Curso Técnico</option>
                    <option value = "ci">Curso de inglês</option>
                </select>
              
              </ol>

            </div>
        )
    }
}
