import axios from 'axios';
import React from 'react';
import {baseUrl} from '../ConfigApi';


export default class TelaInicio extends React.Component{
    state = {
        atividade: []
    }
   
    componentDidMount() {
        this.getAtividadesAleatorias()
      }
      
     
      getAtividadesAleatorias = async () => {
      try{
      
       const response = await axios
       
       .get(baseUrl)
        
       this.setState({atividade: response.data.activity})
       
       console.log(this.state.atividade)
      } catch(error) {
      
       console.log(error.response)
      }
    }
    render(){
        const mapDasAtividades = this.state.atividade.map(()=>{
            
        })
        return(
            <div>
             
             <h1>Atividade aleatória</h1>

             <button onClick = {this.getAtividadesAleatorias}> Requisitar </button>
             <p>Atividade: {mapDasAtividades}</p>
            </div>
     
        )
    }
}