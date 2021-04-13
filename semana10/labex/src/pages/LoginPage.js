import React from 'react'
import {useHistory} from 'react-router-dom'




export default function LoginPage() {
    
    const history = useHistory()

    const backToHome  = () => {
            history.goBack("/")
    } 
    
    
    return (
<>
<button onClick = {backToHome}>Voltar</button>

            <p>LoginPage</p>
            </>
    )
}