
import React from 'react';

import PrecoFiltrado from './components/PrecoFiltrado'
import TelaInicio from './components/TelaInicio';

export default class App extends React.Component{

state =  {
  atividades: [],
  page: "page1"
}




  render () {
    
 const tela =  () => {

switch (this.state.page) {
  case "page1":
    
    return(<div>
     <button onClick = {this.botaoPrecoFiltrado}> Filtrar por preço</button>

     <TelaInicio/>

     
   
   </div>
   
   )
    
    
    case "page2":
    
    return <div>
      <PrecoFiltrado/>
      </div>

  default:
    break;
}
   }  
  return (
    <div className="App">
    {tela()}
    </div>
  );
} 
    
  }




