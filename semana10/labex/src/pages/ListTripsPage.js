import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import temas, { ButtonsHomePage } from '../temas/Temas'


const DivFlex = styled.div `
display:flex;
justify-content:space-around;
background-image:linear-gradient(midnightblue,plum);
color: white;
` 

export default function ListtripPage() {
    const history = useHistory()

    const backToHomePage  = () => {
            history.goBack("/")
    }


    const goToTripsApp = () => {
      history.push("/trips/application")
    
    }

    return (
     
            <DivFlex>
               <ButtonsHomePage onClick = {backToHomePage}>Voltar</ButtonsHomePage>

                <h2>Viagens</h2>

               <ButtonsHomePage onClick = {goToTripsApp}>Cadastre-se</ButtonsHomePage>
          
            </DivFlex>
            
            
          
    )
}