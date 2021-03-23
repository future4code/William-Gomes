import EnsinoSuperior from "./EnsinoSuperior"
import React from "react"; 
import './App.css';
import EnsinoNaoSuperior from './EnsinoNaoSuperior'
import PrimeiraPagina from './PrimeiraPagina'




export default class App extends React.Component {

state = {
  ensino:""
  
}

opçoes = (event) => {
 
  this.setState({ensino: event.target.value})
 
  console.log(this.state.ensino)
}

 
  render() {
 const renderizaTelaCorretar = () =>{
   if (this.state.ensino === "Ensino Superior incompleto" || this.state.ensino === "Ensino Superior completo") {
     return ( <EnsinoSuperior/>)
   }
 }

return <div className = "PaginaPrincipal">
  <PrimeiraPagina opçoes = {this.opçoes}/>
 
  <EnsinoNaoSuperior/>
  <button
   onClick = {this.ProximaEtapa}>
     Próxima Etapa 
     </button>
 
</div>
}

}


