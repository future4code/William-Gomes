import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'


const HomepagePai = styled.div `
color:white;
width:50vw;
height:70vh;
margin:auto;
margin-top:100px;
text-align:center;
padding-top:220px;
box-sizing:border-box;
//background-color:midnightblue;
background-image:linear-gradient(midnightblue,plum);
font-size:24px;
font-family:Georgia, 'Times New Roman', Times, serif;
border-radius:80px;
`

const ButtonsHomePage = styled.button `

background-color: #4CAF50; 
 
border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

`
const DecisionHomePage = styled.div`
display:flex;
justify-content:space-around;

margin-top:100px;
`
export default function HomePage() {
    return (
        <HomepagePai>
            <h1>Labex</h1>
        <DecisionHomePage> 
            <ButtonsHomePage>Admin</ButtonsHomePage> 
            <ButtonsHomePage>Viagens</ButtonsHomePage>
         </DecisionHomePage>
                  
        </HomepagePai>
    )
}