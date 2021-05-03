import React, {useContext, useEffect, useState} from 'react' 
import axios from 'axios'
import ContextComentarios from '../context/ContextComentarios'
import { useHistory, useParams } from 'react-router'
import Posts from './Posts'

function PostComentarios(){

    const [comentarios, setComentarios] = useState([])
    const [handleInput, setHandleInput] = useState()
    const [commentId, setCommentId] = useState('')
    const params = useParams()

    const history = useHistory()

    const token = window.localStorage.getItem('token')
   
    const paramsId = params.id
    const paramsLikes = params.votes
   

    useEffect(()=>{
        details(paramsId)
       
    },[])

    const inputText = (e) => {
        setHandleInput(e.target.value)
    }    


    const createComment = (id) => {
        const body = {
            text: handleInput
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`,body,{
            headers: {
                Authorization:token
            }
        }).then((res)=>{
           alert('comentou!')
           setHandleInput('')
        }).catch((e)=>{
            console.log(e)
        })
    }

    const likeComment = (id,commentId) => {
        const body = { 
            direction: 1 
        }
    
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote
        `,body,{
            headers: {
                Authorization: token 
            }
        }).then((res)=> {
            alert('curtiu')
        }).catch((e)=>{
            alert('Error')
        })
    }


  
    const deslikeComment = (id,commentId) => {
        const body = { 
            direction: -1 
        }
    
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote
        `,body,{
            headers: {
                Authorization: token 
            }
        }).then((res)=> {          
            alert('descurtiu')
        }).catch((e)=>{
            alert('error')
        })
    }

    const likePub = (id) => {
        const body = { 
            direction: 1 
        }
    
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,body,{
            headers: {
                Authorization: token 
            }
        }).then((res)=> {
            alert('Like na Pub')
        }).catch((e)=>{
            alert('Error')
        })
    }



    const deslikePub = (id) => {
        const body = { 
            direction: -1 
        }
    
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,body,{
            headers: {
                Authorization: token 
            }
        }).then((res)=> {
            alert('Deslike na Pub')
        }).catch((e)=>{
            alert('error')
        })
    }


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
   

  const mapDetails = comentarios.map((comments)=>{
   
    return (
     <div>
         <div>
             
         </div>
         <span key = {comments.id}>{comments.username}: </span>
         <span>{comments.text}</span>     

         <div>
         <button onClick = {() => likeComment(paramsId,comments.id)}>Curtir Comen</button>
            <span>{comments.votesCount}</span>
         <button onClick = {() => deslikeComment(paramsId,comments.id)}>Descurtir Comen</button>
         </div>
        
     </div>       
    )
    })


 const goBackPost = () => {
    history.goBack()
}

return (
    <div>
        <button onClick = {goBackPost}>Voltar</button>
        <p>details</p>
        
        <input
        placeholder = 'Digite aqui seu comentario!'
        required
        type = 'text'
        name = 'comentario'
        value = {handleInput}
        onChange = {inputText}
        ></input>
        <button onClick = {() => createComment(paramsId)}>Comentar</button>
        <div>
        <button onClick = {() => deslikePub(paramsId)}>Descurtir Pub</button>
       <span>{paramsLikes}</span>
        <button onClick = {() => likePub(paramsId)}>Curtir Pub</button>
        
        
        </div>
        
    {mapDetails}
   
  
   
   
    </div>
)



}
export default PostComentarios