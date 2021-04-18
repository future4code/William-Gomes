import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import temas, { ButtonsHomePage, H2} from '../temas/Temas'
import styled from 'styled-components'
import axios from 'axios'
 export const DivFlex1 = styled.div `
display:flex;
background-image:linear-gradient(midnightblue,plum);
color: white;
` 
 
const CentralDiv = styled.div `
  background-color:blue;
  width:50vw;
  height:70vh;
  margin:auto;
  margin-top:48px;
  padding:18px;
  color:white;
`
const InputsDiv = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
margin-top:20%;
padding:30px;
`
 export const ButtonsHomePage1 = styled.button `
width:50%;
height:5%;
border-radius:6px;
border:none;
margin-left:25%;
margin-top:32px;
`

export default function LoginPage() {
 
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()


const inputEmail = (e) => {
  setEmail(e.target.value)
}

const inputSenha = (e) => {
  setSenha(e.target.value)
}

const Enter = () => {

  const body = {  
    
    email:email,
    password:senha

}
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/login', body)
  .then((res)=>{
      history.push("/admin/trips/list")
      window.localStorage.setItem('token', res.data.token)
      
  }).catch((e)=>{
      console.log(e.data)
  })

}





    const history = useHistory()

    const backToHome  = () => {
            history.push("/")
    } 
    
    
    return (
      <div>
        <DivFlex1>
            
                <ButtonsHomePage onClick = {backToHome}>Voltar</ButtonsHomePage>
                <H2>Login</H2>
        </DivFlex1>

        <CentralDiv>
          <InputsDiv>
          <p>Email:</p>    
            <input value = {email} 
            placeholder = "Email" 
            onChange = {inputEmail}
            >

            </input>
            <p>Senha:</p>
            <input value = {senha}
             placeholder = "Senha"
             onChange = {inputSenha}
             ></input> 
             
             <ButtonsHomePage1 onClick = {Enter}>Entrar</ButtonsHomePage1>

             
          </InputsDiv>
         
        </CentralDiv>
         
      </div>
   



           
      
          
    )
}