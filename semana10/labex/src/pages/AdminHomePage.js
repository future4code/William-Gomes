import React from 'react'
import {useHistory} from 'react-router-dom'
import {useEffect , useState} from 'react'
import temas, { ButtonsHomePage2, H2} from '../temas/Temas'
import styled from 'styled-components'
import {DivFlex1} from './LoginPage'
import axios from 'axios'
import {token} from '../parameters/Parameters'

const Icon = styled.img `
height:25px;
width:25px;
`

export default function AdminHomePage() {

    const [trips, setTrips] = useState([])
    const history = useHistory()
   
    const backToLoginPage  = () => {
            history.goBack("/login")
    } 

  
      const getTrips = () => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips')
    
    .then((res)=>{
    setTrips(res.data.trips) 
    
    }).catch((e)=>{
    console.log(e.data)
    })  
    }

useEffect(()=>{ 
if (!token){
    history.push("/")
} 
 getTrips()
},[])
 
  
 
 const deleteTrip = (id) => {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips/${id}`,{
          headers: {
              auth:token
          }
      })
    .then((res)=>{
      console.log(res)
        
      getTrips()
      console.log(trips)
    }).catch((e)=>{
        console.log(e)
    })
    }




const mapTrips = trips.map((viagens)=>{
    return (
    <div>
      
        <p key = {viagens.id}> 
        
         {viagens.name}
         
          <button onClick = {() => deleteTrip(viagens.id)}
          
          >X</button> 
          
          </p>
       
    </div>
 
    )
})
return (
        <div>
           <DivFlex1>
            <ButtonsHomePage2 onClick = {backToLoginPage}>Voltar</ButtonsHomePage2>
            <H2>Viagens</H2>
        </DivFlex1>
                   
            
        {mapTrips}
          
        </div>
        
            
            
            
    )
}