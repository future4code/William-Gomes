import React,{useEffect, useState} from 'react'
import  './App.css';
import axios from 'axios'

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
  }).catch((err) => {
    console.log(err)
  })
}



const getProfileToChoose  = () => {
  axios
  .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/person')

  .then((res) => {
   setPersona(res.data.profile)
   
   
  }).catch((err) => {
    console.log(err)
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
    console.log(e)
})
}



const getMatches = () => {
  
axios
.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/william-cruz/matches')

.then((res)=>{
  setMatches(res.data.matches)
  
}).catch((e)=>{
    console.log(e)
})
}

const mapMatch = matches.map((pessoas)=>{
  return (
   <p>{pessoas.name}</p>
  
  
 
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
      <div className = "Img-conteinner">
        
      <img className = 'img-api' src = {persona.photo} ></img>
       <p>{persona.name}</p>
    </div>
      <div className = "Buttons">
         <button onClick = {getProfileToChoose}>X</button>
        <button onClick = {choosePerson}> ❤️ </button>
        
      </div>
    </>
  )
    




}else if (tela === false){
  return (
   
      <div>
          <header>
          <h2>AstroMatch</h2>
          <img onClick = {telaTrue} className = "Icon-app" src = "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/heart-512.png" ></img>

        </header>
        <div>
           {mapMatch}
        </div>
      
        <button onClick = {clear}>Clear</button>
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
