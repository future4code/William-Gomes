import axios from 'axios'
import React, { useState } from 'react' 
import {useHistory} from 'react-router'

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
console.log(form)



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
        console.log(e)
    })
}




return (
    <div>
        <p>Cadastro</p>
        <div>
            <button onClick = {goBackLoginPage}>Voltar</button>
            <br/>
          
            <br/>
            
            <br/>
            <input
            required
            placeholder = 'Nome de Usuário'
            name = "nome"
            type = 'name'
            value = {form.nome}
            onChange = {handleInputChange}
            >
                
            </input>
            <br/>

            <input
            required 
            onChange = {handleInputChange}
            placeholder = 'Email'
            name = "email"
            type = 'email'
            value = {form.email}
            >

            </input>
            <br/>
            <input
            required
            onChange = {handleInputChange}
            placeholder = 'Senha'
            name = "senha"
            value = {form.senha}
            type = 'password'
            >
            </input>
            <br/>
            <button onClick = {signUp}>Cadastrar</button>
        </div>
    </div>
)



}
export default Cadastro