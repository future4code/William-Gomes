import axios from 'axios'
import React, { useState } from 'react' 
import {useHistory} from 'react-router'




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
    <div>
        <p>Email:</p>
        <input
        required
        type = 'email'
        name = 'email' 
        placeholder = 'Email'
        onChange = {handleInputChange}
        >
         
        </input>
        <br></br>
        <p>Senha:</p>
        <input
        required
        type = 'password'
        name = 'senha'
        placeholder = 'Senha'
        onChange = {handleInputChange}
        >
        </input>
        <br></br>
        <button onClick = {login}>Entrar</button>
        <br></br>
        <button onClick = {goCadastro}>Cadastrar</button>
    </div>
)



}
export default LoginPage