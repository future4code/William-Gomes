import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { useHistory } from 'react-router'

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
     
        if (posts === undefined) {
            return <p>LOADING...</p>
        }

    }).catch((e)=>{
        console.log(e)
    })
}
console.log(posts[0])

const mapPost = posts.map((post)=>{
return (
    <div>
        <header>
        <h1 key = {post.id}>{post.username}</h1>
        </header>
        <h3 key = {post.id}>{post.title}</h3>
        <p>{post.text}</p>
    </div>
)
}) 


const history = useHistory()
const goBackLogin = () => {
    
   
    history.goBack()
}

return (
    <div>
        <button onClick = {goBackLogin}>Sair</button>
        <p>Posts</p>

    {mapPost}

    </div>
)



}
export default Posts