import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { token } from '../parameters/Parameters'



export default function CreateTripPage1(){

    const tripsForm = {nome: "", description:"", data:"",duracao:""}
    const [select, setSelect] = useState("")

    const [form, setForm] = useState(tripsForm)
       
    const history = useHistory()

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setForm({...form,[name]:value})
    }


 const handleClick = () => {
     console.log(form)
     const body = {
        name: form.nome,
        planet: select,
        date: form.data,
        description:form.description,
        durationInDays: form.duracao
     }

     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips',body, {
      headers: {
           auth:token
      }
      
     }).then((res)=>{
        console.log(res.data)
     }).catch((e)=>{
        console.log(e)
     })
     
 }
 
 const backToAdminHomePage = () => {
     history.push("/admin/trips/list")
 }


const handleSelectChange = (e) => {
    setSelect(e.target.value)
}
     

    return (
        <div>
            <button onClick = {backToAdminHomePage}>Voltar</button>
            <p>Criar</p>
            <div>
                
                    <input
                    name = "nome"
                    type = {"name"}
                    placeholder = {"Nome"}
                    key = "00"
                    value = {form.nome}
                    onChange= {handleInputChange}
                    />
                     <select  onChange = {handleSelectChange}>

                        <option>Escolha um Planeta</option>
                         <option  value = "mercurio">Mercurio</option>                 
                         <option  value = "terra">Terra</option>
                         <option  value = "venus">Venus</option>
                         <option  value = "marte">Marte</option>
                         <option  value = "plutao">Plutão</option>
                         <option  value = "jupiter">Jupiter</option>
                         <option  value = "saturno">Saturno</option>
                         <option  value = "uranu" >Uranu</option>
                         <option  value = "netuno">Netuno</option>
                         
                     </select>
                     
                     <input
                    name = "data"
                    type = "date"
                    value = {form.data}
                    onChange= {handleInputChange}
                    required
                    key = "01"
                    />
                     <input
                    name = "description"
                    type = "text"
                    value = {form.description}
                    onChange= {handleInputChange}
                    required
                    key = "02"
                    placeholder = "Descrição"
                    />
                     <input
                    name = "duracao"
                    type = "number"
                    key = "03"
                    value = {form.duracao}
                    onChange= {handleInputChange}
                    required
                    placeholder = "Duração em dias"
                    />
                   
               <button onClick = {handleClick}>Enviar</button>
            </div>
        </div>
    )
}