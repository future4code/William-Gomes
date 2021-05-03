import axios from 'axios'
import React, { useState } from 'react' 
import {useHistory} from 'react-router'
import styled from 'styled-components'

export const Button = styled.button`
     position: relative; 
    height:80px;
     width:200px;
     margin-left:40%;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition-duration: 0.1s;
    transition-property: background-color, color, border-color, opacity, box-shadow;
    transition-timing-function: ease-out;
    outline: none;
    border: 1px solid transparent;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
    padding: 8px 18px;
    min-height: 48px;
    background-color: rgb(254, 126, 2);
    color: rgb(1, 1, 0);
    border-radius: 4px;
    margin-top:32px;
`
export const Input = styled.input `
display: block;
    width: 100%;
    font-family: inherit;
    color: rgb(69, 82, 91);
    padding: 0px 0px 8px;
    border: none;
    outline: none;
    border-radius: 0px;
    appearance: none;
    background-image: none;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    transform: translateZ(0px);
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    line-height: unset;
    -webkit-text-fill-color: rgba(69, 82, 91, 0.3);
    animation: 1ms ease 0s 1 normal none running native-autofill-in;
    transition: background-color 1e+08s ease 0s, box-shadow 0.1s ease-out 0s;
    box-shadow: rgb(69 82 91 / 30%) 0px 1px;
    background-color: transparent !important;

`
const Div = styled.div`
border:solid;
padding:50px;
border-radius:5px;
width:70vw;
height:50vh;
margin:auto;
margin-top:150px;
`

function LoginPage(){


    const loginForm = {email:"", senha:""}

    const [form, setForm] = useState(loginForm)
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
    
        setForm({...form,[name]:value})
    }
console.log(form)

    const history = useHistory()




const goCadastro = () => {
    history.push('/cadastro')
}


const login = () => { 
  
    const body = {
        email:form.email,
        password:form.senha
    }
  
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login',body)
.then((res)=>{
window.localStorage.setItem('token', res.data.token)
history.push('/posts')
}).catch((e)=>{
console.log(e)
})
}



return (
    <Div>
      
        <Input
        required
        type = 'email'
        name = 'email' 
        placeholder = 'Email'
        onChange = {handleInputChange}
        >
         
        </Input>
        <br></br>
      
        <Input
        required
        type = 'password'
        name = 'senha'
        placeholder = 'Senha'
        onChange = {handleInputChange}
        >
        </Input>
        <br></br>
        <Button onClick = {login}>Entrar</Button>
           <br></br>
        <Button onClick = {goCadastro}>Cadastrar</Button>
        
     
        
    </Div>
)



}
export default LoginPage