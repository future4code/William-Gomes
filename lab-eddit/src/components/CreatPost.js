import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function CreatePost() {

    const history = useHistory()

    const goBackPost = () => { 
        history.goBack()
    }



    const createForm = {title: "", description:""}

    const [form, setForm] = useState(createForm)
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
    
        setForm({...form,[name]:value})
    }
    console.log(form)

    const token = window.localStorage.getItem('token')

const createPost = () => {
    const body = {
        text:form.description,
        title:form.title
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',body, {
        headers: {
            Authorization: token
        }
    })
    
    .then((res)=>{
        console.log(res.data)
    }).catch((e)=>{
        console.log(e)
    })
}

    return (
        <div>
            <header>
                <button onClick = {goBackPost}>Voltar</button>
            </header>
            <p>Titulo</p>
            <input
            required
            onChange = {handleInputChange}
            name = 'title'
            type = 'text'
            value = {form.title}
            >

            </input>
            <p>Descrição:</p>
            <input
              required
              onChange = {handleInputChange}
              name = 'description'
              type = 'text'
              value = {form.description}
              placeholder = 'O que está sentindo hoje?'
            >

            </input>
            <div>
            <button onClick = {createPost}>Postar</button>
            </div>
            
        </div>
    )
}

export default CreatePost