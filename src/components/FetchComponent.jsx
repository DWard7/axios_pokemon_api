import { useState } from "react";
import axios from 'axios';

const AxiosFetchAllPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const GetPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(response => { setPokemon(response.data.results) }, [])
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Fetching Pokemon</h1>
            <button onClick={GetPokemon}>Fetch Pokemon</button>
            {
                pokemon ?
                    pokemon.map((pokemon, idx) => {
                        return <ul key={idx}><li>{pokemon.name}</li></ul>
                    }) :
                    <h1>Please fetch Pokemon</h1>
            }
        </div>
    )
}

export default AxiosFetchAllPokemon