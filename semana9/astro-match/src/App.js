import React,{useEffect, useState} from 'react'
import  './App.css';
import axios from 'axios'
import styled from 'styled-components'



const ImageApi = styled.img `
height:250px;
padding:80px;
width:300px;
margin:auto;
`

const InfosHome = styled.div `
color:white;
font-size:16px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-weight:bold;
margin-top:-50px;

`

const ConteinerButtons = styled.div `
background-color:blue;
bottom:0;
margin-top:60px;
display:flex;
justify-content:space-evenly;
` 

const Buttons = styled.button `
height:60px;
width:60px;
border-radius:100%;
`
const InfosMatches = styled.div`
color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:16px;
font-size:20px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`
const ImageMatches = styled.img`
height:80px;
width:100px;
border-radius:100px;
`
const IconMatches = styled.img `
 height: 35px;
  width: 35px;
  padding:10px;
` 





function App() {

const [tela, setTela] = useState(true)
const [persona, setPersona] = useState({})
const [matches, setMatches] = useState([])


const telaFalse = () => {
 setTela(false)
}

const telaTrue = () => {
  setTela(true)
}

useEffect (()=>{

  getProfileToChoose()
  getMatches()
},[])


const clear = () =>{
  axios
  .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/clear')

  .then((res) => {
   alert("limpo")
   getMatches()
  }).catch((e) => {
    alert(`Error ${e}`)
  })
}



const getProfileToChoose  = () => {
  axios
  .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/person')

  .then((res) => {
   setPersona(res.data.profile)
   
   
  }).catch((e) => {
    alert(`Error ${e}`)
  })
}




const choosePerson = () => {
  const body = {
      id: persona.id,
      choice: true
  }
axios
.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/choose-person', body)

.then((res)=>{
  getMatches()
  getProfileToChoose()
  
}).catch((e)=>{
   alert(`Error ${e}`)
   
})
}



const getMatches = () => {
  
axios
.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/matches')

.then((res)=>{
  setMatches(res.data.matches)
  
}).catch((e)=>{
  alert(`Error ${e.data}`)
})
}

const mapMatch = matches.map((pessoas)=>{
  return (
    <InfosMatches>
     <ImageMatches src = {pessoas.photo} ></ImageMatches> 
     {pessoas.name}
    </InfosMatches>

    )
})

console.log(persona)

  const renderizarTelaCorreta = ( ) => {
  
 
    if (tela === true){
        return (
     <>
     <header>
        <h2>AstroMatch</h2>
        <img onClick = {telaFalse} className = "Icon-app" src = "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/heart-512.png" ></img>
  
      </header>
    
        <ImageApi src = {persona.photo}></ImageApi>
      
      <InfosHome>
        <p>{persona.name}</p>
       <p>{persona.bio}</p>
      </InfosHome>
       
          <ConteinerButtons>
        <Buttons onClick = {getProfileToChoose}>X</Buttons>
        <Buttons onClick = {choosePerson}>❤️</Buttons>
       
          </ConteinerButtons>
      
         
        
   
    </>
  )
    




}else if (tela === false){
  return (
   
      <div>
          <header>
          <h2>AstroMatch</h2>
          <img onClick = {telaTrue} className = "Icon-app" src = "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/heart-512.png" ></img>

        </header>
    
     <IconMatches onClick = {clear} src = "https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-512.png">

     </IconMatches>

        
        <div>
           {mapMatch}
        </div>
      
       
      </div>
  )
  

    }
    
  
    
  }


  return (
    <div className="App">
     
    
    {renderizarTelaCorreta()}

    </div>
  );
}

export default App;
