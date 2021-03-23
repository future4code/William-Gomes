import React from "react";
import './App.css';
import axios from 'axios'



export default class App extends React.Component {

state = {
  telaLogin: true, 
  inputUserName: "",
  inputUserEmail: "",
  nomes: []
}

componentDidMount() {
  this.getAllUsers();
}

handleUserName = (event) => {
  this.setState({inputUserName:event.target.value})
}

handleUserEmail = (event) => {
  this.setState({inputUserEmail:event.target.value})
 
}
getAllUsersButton = () => {
  this.setState({telaLogin:true})
}
listen = () => {
this.setState({telaLogin:false})
}


getAllUsers = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{

  headers: {
    Authorization: "william-gomes-cruz"
  }
  
}).then((resposta) =>{

this.setState({nomes:resposta.data})
console.log(resposta.data)
}).catch((error) => {
(alert("Deu algo de errado"))

})

}

criarNome = () => {
 
  const  body = {
    name:this.state.inputUserName,
    email: this.state.inputUserEmail
  }

  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {

  headers: {
    
   Authorization:'william-gomes-cruz'
    }
}).then((resposta) => {
 this.getAllUsers()
  this.setState({inputUserEmail: ""})
  this.setState({inputUserName: ""})
 console.log(resposta.data)
  
}).catch((error)=> {
{(alert("deu tudo errado"))}

})

};

render(){
const rendezirarTodosNomes = this.state.nomes.map ((pessoas) => {
  <li key ={pessoas.id}> {pessoas.name}</li>


})


const renderizaTelaCorreta = () => {

  if (this.state.telaLogin === true){

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


}else{
  return(
    <div>
 
   <button onClick = {this.getAllUsersButton}>
      Ir para a página de registro
    </button>

    {this.state.nomes.length > 0 ? <ul>{rendezirarTodosNomes}</ul>:(<p>Carregando...</p>)} 
  
    </div>

  )

}


}
return(
<div className = 'app'>


{renderizaTelaCorreta()}


   
</div>

);
}

}




