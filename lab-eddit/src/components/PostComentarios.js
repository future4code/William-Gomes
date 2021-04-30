import React, {useContext, useEffect, useState} from 'react' 
import axios from 'axios'
import ContextComentarios from '../context/ContextComentarios'
import { useParams } from 'react-router'



function PostComentarios(){

    const [comentarios, setComentarios] = useState([])

    const params = useParams()

    const token = window.localStorage.getItem('token')
   
    const paramsId = params.id
    console.log(paramsId)

    useEffect(()=>{
        details(paramsId)
    },[])


    const details = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,{
            headers: {
                Authorization: token 
            }
        }).then((res)=> {
            setComentarios(res.data.post.comments)
           
        }).catch((e)=>{
            console.log(e.data)
        })
    }
    console.log(comentarios)

  const mapDetails = comentarios.map((comments)=>{
    return (
     <div>
         <span>{comments.username}: </span>
         <span>
        {comments.text.comment}</span>
         
     </div>       
    )
    })



    
return (
    <div>
        <p>details</p>
        <input
        placeholder = 'Digite aqui seu comentario!'
        required
        type = 'text'

        ></input>
        <button>Comentar</button>
    {mapDetails}
    </div>
)



}
export default PostComentarios