import React from 'react'
import { useEffect, useState } from 'react'
import temas, { ButtonsHomePage, ButtonsHomePage2, H2 } from '../temas/Temas'
import styled from 'styled-components'
import { ButtonsHomePage1, DivFlex1 } from './LoginPage'
import axios from 'axios'
import { token } from '../parameters/Parameters'
import { useHistory } from 'react-router-dom'

const Icon = styled.img`
height:25px;
width:25px;
`

export default function AdminHomePage() {

    const [trips, setTrips] = useState([])
    const history = useHistory()

    const backToLoginPage = () => {
        history.push("/login")
    }


    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips')

            .then((res) => {
                setTrips(res.data.trips)
                alert("Funcionou!!")
            }).catch((e) => {
                alert("Erro :(")
            })
    }

    useEffect(() => {
        if (!token) {
            history.push("/")
        }
        getTrips()
    }, [])



    const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips/${id}`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                alert("Funcionou!!")

                getTrips()

            }).catch((e) => {
                alert("Erro :(")
            })
    }

    const getTripsDetails = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const goCreateTripPage = () => {
        history.push(`/admin/trips/criar`)
    }


    const mapTrips = trips.map((viagens) => {
        return (

            <div>

                <button
                    key={viagens.id}
                    onClick={() => getTripsDetails(viagens.id)}
                >
                    {viagens.name}
                </button>
                <button onClick={() => deleteTrip(viagens.id)}>X</button>

            </div>
        )
    })





    return (
        <div>
            <DivFlex1>
                <ButtonsHomePage2 onClick={backToLoginPage}>Voltar</ButtonsHomePage2>

                <H2>Viagens</H2>
                <button onClick={goCreateTripPage}>Cadastrar</button>

            </DivFlex1>


            {mapTrips}


        </div>




    )
}