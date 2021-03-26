import axios from 'axios'
import './App.css';
import React from 'react'
import { baseUrl, headerConfig } from './Parameters'


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

        <button onClick={() =>this.deletePlaylist(playlist.id)}
        
        >X
        
        </button>

      </p>

    })
    

    const renderizaTelaCorreta = () => {
      if (this.state.telaCreate) {
        return (
          <div className="telaCreate">

            <header>
              <h1>Header</h1>
              <button onClick={this.playlistsButton}>Ver Playlists</button>
            </header>

            <div>
              <h2>Criar playlist</h2>
              <input
                value={this.state.inputValue}
                onChange={this.hendleInput}
                placeholder="Nome da playlist"
              ></input>
              <button onClick={this.addPlaylist}>Enviar</button>
            </div>

          </div>
        )

      } else {
        return <div className="TelaPlaylists">
          <header>
            <h1>Header</h1>

            <button
              onClick={this.home}
            >Ciar playlist</button>

            <h2>Playlists:</h2>

            {mapPlaylist}

          </header>

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


