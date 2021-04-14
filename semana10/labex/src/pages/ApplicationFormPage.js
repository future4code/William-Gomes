import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import temas, { ButtonsHomePage} from '../temas/Temas'

const FlexCadastro = styled.div `
display:flex;
background-image:linear-gradient(midnightblue,plum);
color: white;
text-align:center;
`
const H2 = styled.p `
margin-left:750px;
font-size:24px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`

export default function ApplicationFormPage() {
  
    const history = useHistory()

    const backToListTripsPage  = () => {
            history.goBack("/")
    } 
  
  return (
        <FlexCadastro>
        <ButtonsHomePage onClick = {backToListTripsPage}>
                Voltar
        </ButtonsHomePage>
        <H2>Cadastro</H2>
        </FlexCadastro>
           
        
    )
}