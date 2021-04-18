import axios from 'axios'
import React from 'react'
import {useParams} from 'react-router-dom'
import {token} from '../parameters/Parameters'
import {useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function TripDetailsPage() {

const [viagemDescription, setViagemDescription] = useState({})
const history = useHistory()
const params = useParams()
const [candidatosDescription, setCandidatosDescription] = useState([])
const [aprovados,setAprovados] = useState([])



useEffect(()=>{
    
    if (!token){
        history.push("/")
    } 
    viagem() 
   
},[]);


  const mapCandidatos = candidatosDescription.map((pessoas)=>{
        return (
            <div>
            <p>{pessoas.name}</p>
            <p>{pessoas.age}</p>
            <p>{pessoas.applicationText}</p>
            <p>{pessoas.profession}</p>
            <p>{pessoas.country}</p>
        
            </div>
        )
  })

const mapIdCandidatos = candidatosDescription.map((id)=>{
    return id.id
})

const mapNameCandidatos = candidatosDescription.map((name)=>{
    return name.name
})

const viagem = () => {
    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trip/${params.id}`, {
        headers: {
            auth: token
        }
    }).then ((res)=>{
        console.log(res.data.trip.candidates)
        setCandidatosDescription(res.data.trip.candidates)
        setViagemDescription(res.data.trip)
    }).catch((e)=>{

        console.log(e.data)
    })
}


       const goToBackAdminHomesPage = () =>{
            history.push('/admin/trips/list')
        }

const decideCandidate = (tripid, candidateid) => {
    const body = {
        approve: true
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-cruz/trips/${tripid}/candidates/${candidateid}/decide`, body, {
        headers: {
            auth:token
        }
    }).then ((res)=>{
        alert("aceito!")     
    }).catch((e)=>{
        alert("error")
    })
}


    return (
            <>
            <button onClick = {goToBackAdminHomesPage}>Voltar</button>
            <h1>{viagemDescription.name}</h1>
            <p>{viagemDescription.date}</p>
            <p>{viagemDescription.description}</p>
            <p>{viagemDescription.planet}</p>
            <p>{viagemDescription.durationInDays}</p>
           
            <h2>Candidatos Pendentes</h2>
           
            {mapCandidatos}

            <button onClick = {()=>decideCandidate(viagemDescription.id,mapIdCandidatos )}>Aceitar Candidato!</button>


            
            </>
    )
    }