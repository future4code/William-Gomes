import React, {useEffect, useState} from "react";
import axios from "axios";
import App from '../App'


const PokeCard = props => {
    
const [pokemon, setPokemon] = useState({})


useEffect (() => {

    pegaPokemon(props.pokemon)

},

[]);

useEffect ((prevProps) => {


     
        pegaPokemon(props.pokemon);

  


    },[pokemon])



    const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon (response.data);
      })
      .catch(err => {
        console.log(err);
      });
}


const pokeMon = pokemon
return(

    <div>
        <p>{pokeMon.name}</p>
        <p>{pokeMon.weight} Kg</p>
        {pokeMon.types && <p>{pokeMon.types[0].type.name}</p>}
        {pokeMon.sprites && (
          <img src={pokeMon.sprites.front_default} alt={pokeMon.name} />
        )}
      </div>
)
 }

 export default PokeCard;

