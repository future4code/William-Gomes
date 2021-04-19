import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import temas, { ButtonsHomePage } from '../temas/Temas'
import axios from 'axios'
import { useState } from 'react'




const FlexCadastro = styled.div`
display:flex;
background-image:linear-gradient(midnightblue,plum);
color: white;
text-align:center;
`
const H2 = styled.p`
margin-left:750px;
font-size:24px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`

export default function ApplicationFormPage() {
        const tripsForm = {
                nome: "", candidatura: "", profissao: "", idade: "",
        }
        const [selectPais, setSelectPais] = useState("")
        const [form, setForm] = useState(tripsForm)
        const [trips, setTrips] = useState([])
        const [viagem, setViagem] = useState("")




        useEffect(() => {
                getTrips()

        }, [])



        const getTrips = () => {
                axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips')

                        .then((res) => {
                                setTrips(res.data.trips)
                                alert("funcionou!!")
                        }).catch((e) => {
                                alert("Erro :(")
                        })
        }

        const history = useHistory()

        const backToListTripsPage = () => {
                history.goBack("/")
        }

        const mapTrips = trips.map((viagens) => {
                return (
                        <option key={viagens.id} value={viagens.id}>
                                { viagens.name}

                        </option>

                )

        })


        const selectHandle = (e) => {
                setViagem(e.target.value)
        }

        const applyToTrip = (id) => {
                const body = {
                        name: form.nome,
                        age: form.idade,
                        applicationText: form.candidatura,
                        profession: form.profissao,
                        country: selectPais
                }
                axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips/${id}/apply`, body)

                        .then((res) => {
                                alert("foi")
                        }).catch((e) => {
                                alert("erro")
                        })
        }

        const handleInputChange = (event) => {
                const { name, value } = event.target;

                setForm({ ...form, [name]: value })

                event.preventDefault()
        }


        const handleSelectPais = (event) => {
                setSelectPais(event.target.value)
        }


        return (
                <>
                        <FlexCadastro>
                                <ButtonsHomePage onClick={backToListTripsPage}>
                                        Voltar
        </ButtonsHomePage>
                                <H2>Cadastro</H2>
                        </FlexCadastro>

                        <form>


                                <select onChange={selectHandle}>

                                        <option>Selecione uma Viagem </option>
                                        {mapTrips}



                                </select>
                                <input
                                        name="nome"
                                        type={"name"}
                                        placeholder={"Nome"}
                                        key="04"
                                        value={form.nome}
                                        onChange={handleInputChange}
                                        required
                                />

                                <input
                                        name="idade"
                                        type="number"
                                        value={form.idade}
                                        onChange={handleInputChange}
                                        placeholder="Idade"
                                        required
                                        key="05"
                                />
                                <input
                                        name="candidatura"
                                        type="text"
                                        value={form.candidatura}
                                        onChange={handleInputChange}
                                        required
                                        key="06"
                                        placeholder="Texto de Candidatura"
                                />
                                <input
                                        name="profissao"
                                        type="text"
                                        value={form.profissao}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Profissão"
                                        key="07"
                                />
                                <select onChange={handleSelectPais}>
                                        <option>Escolha um País</option>
                                        <option value="brasil">Brasil</option>
                                        <option value="eua">Estados Unidos</option>
                                        <option value="irlanda">Irlanda</option>
                                </select>

                                <button onClick={() => applyToTrip(viagem)}>Enviar</button>
                        </form>
                </>

        )
}