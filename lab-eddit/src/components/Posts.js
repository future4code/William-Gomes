import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react' 
import { useHistory } from 'react-router'
import createPost from './CreatPost'
import PostComentarios from './PostComentarios'
import ContextComentarios from '../context/ContextComentarios'


function Posts(){

const [posts, setPosts] = useState([])

useEffect(()=>{
   getPosts()
},[])

const token = window.localStorage.getItem('token')

const getPosts = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {
        headers: {
            Authorization: token
        }
    }).then((res)=>{      
        setPosts(res.data.posts)
       
    }).catch((e)=>{
       alert(e)
    })
}

const goCreatePost = () => {
 history.push('/create')
}


const goToDetailsPage = (id,votes) => {
    history.push(`posts/${id}/${votes}`) 
    
}

const mapPost = posts.map((post)=>{
   
         return (
        <div>
        <header>
        <h1 key = {post.id}>{post.username}</h1>
        </header>
        <h3 key = {post.id}>{post.title}</h3>
        <p>{post.text}</p>
       <div>
            <p>curtidas: {post.votesCount}</p>
        <>
            <p>{post.commentsCount} comentários</p>
           
            <button onClick = {() => goToDetailsPage(post.id,post.votesCount)}>Comentar também</button>   
        </> 
        
       </div>
       <>
      
         
       </>
        <hr/>
         </div>
   
)    
}) 


const history = useHistory()
const goBackLogin = () => {
    
   
    history.goBack()
}

return (
    
    <div>
        
        <header>
        <button onClick = {goBackLogin}>Sair</button>
        <button onClick = {goCreatePost}>Criar um Post</button>
        <p>Posts</p>
        </header>
        
  {mapPost}
    
   
    </div>
)
}
export default Posts