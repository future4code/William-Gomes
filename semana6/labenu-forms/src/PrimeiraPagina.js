import React from "react"; 
import App from './App'
export default class PrimeiraPagina extends React.Component {

    render(){
        return(
            <div className="App">
              <header className="App-header">
                <h1>Etapa 1  - Dados Gerais</h1>
              </header>
          
              <div className='Formulário'>
                <ol>
                  <li>Qual seu nome ?</li>
                  <input type = "text"></input>
                  <li>Qual sua idade?</li>
                  <input type = "text"></input>
                  <li>Qual seu email?</li>
                  <input type = "text"></input>
                  <li>Qual a sua escolaridade?</li>
              
                  <select className = "select" onChange = {this.props.opçoes}>
                 
                    <option value = "emi">
                      Ensino médio incompleto
                      </option>
                    
                    <option value = "emc">
                      Ensino médio completo       
                    </option>
                    
                    <option value = "esi">
                      Ensino Superior incompleto
                    </option>
          
                    <option value = "esc">
                      Ensino Superior completo
                    </option>
                   
                  </select>
                </ol>
          
                
              </div>
            </div>
          
        
           )
    }


}