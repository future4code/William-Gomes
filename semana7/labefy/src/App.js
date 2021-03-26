import axios from 'axios'
import './App.css';
import React from 'react'
import { baseUrl, headerConfig } from './Parameters'
import styled from "styled-components";

const HeaderStyled = styled.div `
color:mediumSlateblue;
background-color:coral;
display:flex;
justify-content:space-evenly;
` 
const ButtonStyled = styled.button` 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border-width: 0.0625rem;
    border-style: solid;   
    align-items: center;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    border-radius: 0.1875rem;
    background-color: rgb(78, 196, 55);
    border-color: rgb(78, 196, 55);
    color: rgb(255, 255, 255);
`
  const HomeStyled = styled.div `
  
  background-color: #282c34;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  ` 
  const InputHome = styled.input`
    height:50px;
    width:150px;
   border-radius: 8px;
   border-color:black;
   border-width:1px;
  `
  const ButtonStyled2 = styled.button `
    margin-left:24px;
    height:50px;
    width:100px;
    font-family:cursive;
    font-size:12pt;
    box-sizing:border-box;
  `
  const ConteinnerHome = styled.div`
    display:flex;
  `
export default class App extends React.Component {


  state = {
    telaCreate: true,
    inputValue: "",
    playlist: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  playlistsButton = () => {
    this.setState({ telaCreate: false })
  }

  home = () => {
    this.setState({ telaCreate: true })
  }

  hendleInput = (e) => {
    this.setState({ inputValue: e.target.value })

  }

  addPlaylist = () => {
    const body = {
      name: this.state.inputValue
    }
    axios
      .post(baseUrl, body, headerConfig)

      .then((res) => {
        this.setState({ inputValue: "" })
        this.getAllPlaylists()
      })
      .catch((err) => {
        if (this.state.inputValue === "") {
          return alert("Digite algo no campo")
        }
        alert("Crie uma playlist com um nome ainda não criado")
      })

  }



  getAllPlaylists = () => {
    axios.get(baseUrl, headerConfig)
      .then((res) => {

        this.setState({ playlist: res.data.result.list })
     
      }).catch((err) => {
       
      })
  }


  deletePlaylist = (id) => {
    axios.delete(`${baseUrl}/${id}`, headerConfig)
      .then((res) => {
        this.getAllPlaylists()
      }).catch((err) => {
       
      })
  }


  render() {
    const mapPlaylist = this.state.playlist.map((playlist) => {
      return <p key={playlist.id}> {playlist.name}

      <ButtonStyled2 onClick={() =>this.deletePlaylist(playlist.id)}>
        X
      </ButtonStyled2>
       
        
        
        
       

      </p>

    })
    

    const renderizaTelaCorreta = () => {
      if (this.state.telaCreate) {
        return (
          <div className="telaCreate">

            <header>
              <HeaderStyled>
                
                 <h1>Labefy</h1>
                 <ButtonStyled  onClick={this.playlistsButton}>   
            
                
                Ver Playlists
                
                </ButtonStyled>
              
              </HeaderStyled>
             
            </header>

          <HomeStyled>
            <div>
            <h2>Criar playlist</h2>
            <ConteinnerHome>
              <InputHome 
              value={this.state.inputValue}
              onChange={this.hendleInput}
               placeholder="Nome da playlist">
           
            </InputHome> 
         
               <ButtonStyled2 onClick={this.addPlaylist}>
                    Enviar
              </ButtonStyled2>
            </ConteinnerHome>
            
              
              </div>
          </HomeStyled>
              
          

          </div>
        )

      } else {
        return <div className="TelaPlaylists">

          <header>
            <HeaderStyled>
               <h1>As suas playlists estão aqui</h1>
            
            <ButtonStyled onClick={this.home}>  
            
            Ciar playlist
            
            </ButtonStyled>
            
              
          
            </HeaderStyled>
            </header>

            <HomeStyled>
            <h2>Playlists:</h2>

            {mapPlaylist}
            </HomeStyled>
           

          

        </div>
      }
    }


    return (
      <div className="App">

        {renderizaTelaCorreta()}

        <footer></footer>
      </div>
    );
  }

}


