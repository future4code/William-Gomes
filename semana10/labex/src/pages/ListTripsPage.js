import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import temas, { ButtonsHomePage, DivFlex} from '../temas/Temas'


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