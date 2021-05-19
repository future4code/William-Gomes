import axios from 'axios'
import React, { useState } from 'react' 
import {useHistory} from 'react-router'
import styled from 'styled-components'
import {Input, Button} from './LoginPage'

const Header = styled.header`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
`
const ButtonCadastro = styled.button`
height:50px;
font-size:24px;
background-color:black;
color:white;
cursor: pointer;
`
const H1 = styled.h1 `
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

function Cadastro(){

const history = useHistory()

const goBackLoginPage = () => {
    history.goBack()
}

const cadastroForm = {nome: "", email:"", senha:""}

const [form, setForm] = useState(cadastroForm)

const handleInputChange = (event) => {
    const {name, value} = event.target;

    setForm({...form,[name]:value})
}




const signUp  = () => {
    const body = {
        email:form.email,
        password:form.senha,
        username:form.nome 
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
    .then((res)=>{
       alert("Usuário Cadastrado")
       
    }).catch((e)=>{
        alert(e)
    })
}




return (
    <div>
        <Header>
            <ButtonCadastro onClick = {goBackLoginPage}>Voltar</ButtonCadastro> 
             <H1>Cadastro</H1>
         
        </Header>
      
        
        <div>
           
            <br/>
          
            <br/>
            
            <br/>
            <Input
            required
            placeholder = 'Nome de Usuário'
            name = "nome"
            type = 'name'
            value = {form.nome}
            onChange = {handleInputChange}
            >
                
            </Input>
            <br/>

            <Input
            required 
            onChange = {handleInputChange}
            placeholder = 'Email'
            name = "email"
            type = 'email'
            value = {form.email}
            >

            </Input>
            <br/>
            <Input
            required
            onChange = {handleInputChange}
            placeholder = 'Senha'
            name = "senha"
            value = {form.senha}
            type = 'password'
            >
            </Input>
            <br/>
            <Button onClick = {signUp}>Cadastrar</Button>
        </div>
    </div>
)



}
export default Cadastro