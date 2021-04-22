import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import temas, { ButtonsHomePage, DivFlex} from '../temas/Temas'
import axios from 'axios'
import {useEffect , useState} from 'react'

export default function ListtripPage() {


    const history = useHistory()

     const [trips, setTrips] = useState([])  
   
     useEffect(()=>{ 
         getTrips()
        },[])
         

     const getTrips = () => {
        axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips')
        
        .then((res)=>{
        setTrips(res.data.trips) 
        alert("Funcionou!!")
        
        }).catch((e)=>{
        alert("Erro :(")
        })  
        }
   
     const backToHomePage  = () => {
            history.goBack("/")
    }


    const goToTripsApp = () => {
      history.push("/trips/application")
    
    }


    const mapTrips = trips.map((viagens)=>{
        return (
            
        <div>
            
             <p
              key = {viagens.id}
             
              > 
              {viagens.name}          
              </p>   
               
                   
        </div> 
        )
})


    return (
                <>
                <DivFlex>
               <ButtonsHomePage onClick = {backToHomePage}>Voltar</ButtonsHomePage>

                <h2>Viagens</h2>

               <ButtonsHomePage onClick = {goToTripsApp}>Cadastre-se</ButtonsHomePage>
          
            </DivFlex>

                <div>
                        {mapTrips}
                </div>
                </>
     
            
            
            
          
    )
}