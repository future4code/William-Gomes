import React from "react";
import './App.css';
import axios from 'axios'
import {baseUrl, configHeader} from './parameters'



export default class App extends React.Component {

state = {

  tela: "login", 
  inputUserName: "",
  inputUserEmail: "",
  nomes: [],


componentDidMount() {
  this.getAllUsers();

handleUserName = (event) => {
  this.setState({inputUserName:event.target.value})
}

handleUserEmail = (event) => {
  this.setState({inputUserEmail:event.target.value})


}
getAllUsersButton = () => {
  this.setState({tela:"login"})
}
listen = () => {
this.setState({tela:"todosUsuarios"})
}



      getAllUsers = () => {
      axios.get(baseUrl,configHeader)
        
      .then((resposta) =>{

      this.setState({nomes:resposta.data})
      console.log(resposta.data)
      })

      .catch((error) => {
      alert("Deu algo de errado")

      })

      }

      getUserById = async (id) => {
        
        const body = {
          email: this.state.inputUserEmail,
          name: this.state.inputUserName,
         
        }

        try{
          const response = await axios.get(`${baseUrl}/${id}`, body,configHeader)
        
          this.getAllUsers()
        }catch(error){
          alert("Deu algo de errado")

        }

      }
    
      deleteUser = async (id) => {
        if (window.confirm ("Deseja mesmo excluir este usuário?")){
          try{
      const response = await axios.delete(`${baseUrl}/${id}`, configHeader)
    
      this.getAllUsers()
    }
      catch(error) {
        alert("Deu algo de errado")
        
      }
        }
      

      }

      criarNome = () => {
      
      const  body = {
      name:this.state.inputUserName,
      email: this.state.inputUserEmail
      }

      axios.post(baseUrl, body, configHeader)
        
      .then((resposta) => {
      this.getAllUsers()
      this.setState({inputUserEmail: ""})
      this.setState({inputUserName: ""})
      alert("Usuário criado!")
        
      })

      .catch((error)=> {
      {alert("deu tudo errado")}

      })

      };





render(){
  const renderizarTodosNomes = this.state.nomes.map ((pessoas) => {
    return(
      <div key ={pessoas.id}>
        
          <li > {pessoas.name} </li>
      
          <button onClick = {() => this.deleteUser(pessoas.id)}
          
          >Deletar</button>

          <button onClick = {() => {this.getUserById(pessoas.id)}}
          
          >Detalhes</button>
      </div> 
    ) 
  
  })
 

const renderizaTelaCorreta = (pessoasId) => {

  if (this.state.tela === "login"){


   return(
<div>
    <button onClick = {this.listen}>Ir para página de lista</button>

        <li>Nome</li>
        <input
        onChange = {this.handleUserName}
        value = {this.state.inputUserName}
        >

        </input>

        <li>Email</li>
        <input
         onChange = {this.handleUserEmail}
         value = {this.state.inputUserEmail}
        >

        </input>

    <button onClick ={this.criarNome}>Salvar</button>
</div>
 ) 



}else if (this.state.tela === "todosUsuarios"){
  return(
    
=======
}else{
  return(

 
   <button onClick = {this.getAllUsersButton}>
      Ir para a página de registro
    </button>


    {this.state.nomes.length > 0 
    
    ? <ul>{renderizarTodosNomes}</ul>
         
   :(<p>Sem Usuário</p>)} 
   


    </div>

  )



}
return(
<div className = 'app'>


{renderizaTelaCorreta()}


   
</div>

);
}

}




