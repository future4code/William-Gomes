import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id:Date.now(0),
        texto:'catar papelao',
        completa: false,
      },
      {
        id:Date.now(1),
        texto:'catar coquinho',
        completa: true,
      }
    ],
      inputValue: '',
      filtro: ''
    }
/*
  componentDidUpdate() {
    localStorage.setItem("TarefasAtualizadas", JSON.stringify(Tarefa))
   
    const TarefasStringAtualizadas = localStorage.getItem("TarefasAtualizadas")

    const TarefasObjetoAtualizadas =localStorage.JSON.parse(TarefasStringAtualizadas)
  };
*/
  componentDidMount() {
   /* localStorage.setItem("TarefasInicio",JSON.stringify(Tarefa))

    const TarefasStringInicio = localStorage.getItem("TarefasInicio")

    const tarefasObejtosInicio =localStorage.JSON.parse(TarefasStringInicio)*/
  };

  onChangeInput = (event) => {
      this.setState({inputValue:event.target.value}) 
      
  }

  criaTarefa = () => {
    const NovaTarefa = [{
      id: Date.now(),
      texto:"",
      completa:false
    }]
    const CopiaDaTarefa = [...this.state.tarefas, NovaTarefa]
    this.setState({tarefas: CopiaDaTarefa})
  }

  selectTarefa = (id) => {
    const NovaListaDeTarefa = this.state.CopiaDaTarefa.map((tarefas) => {
       if (tarefas.id === tarefas.id){
         const TarefaNova = {
           ...tarefas,completa:!tarefas.completa
         }
          return TarefaNova
        }else{
          return tarefas
        }


      })
        this.setState({tarefas: NovaListaDeTarefa})
    }

  onChangeFilter = (event) => {
      this.setState({filtro:event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input type = "text" value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                key = {tarefa.id}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
