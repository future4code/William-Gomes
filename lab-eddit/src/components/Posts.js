import axios from 'axios'
import React, { useEffect, useState } from 'react' 
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
        console.log(e)
    })
}

const deslike = (id) => {
    const body = { 
        direction: -1 
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,body,{
        headers: {
            Authorization: token 
        }
    }).then((res)=> {
        console.log(res.data)
    }).catch((e)=>{
        console.log(e.data)
    })
}


const goCreatePost = () => {
 history.push('/create')
}


const goToDetailsPage = (id) => {
    history.push(`posts/${id}`) 
}


const like = (id,commentId) => {
    const body = { 
        direction: 1 
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote
    `,body,{
        headers: {
            Authorization: token 
        }
    }).then((res)=> {
        console.log(res.data)
        alert('curtiu')
    }).catch((e)=>{
        console.log(e.data)
    })
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

            <>
           <span onClick = {() => like(post.id)}>👍</span>
            <span>{post.votesCount}</span>
            <span onClick = {() => deslike(post.id)}>👎</span>
        </>
        <>
            <p>{post.commentsCount} comentários</p>
           
            <button onClick = {() => goToDetailsPage(post.id)}>Comentar também</button>   
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