import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = () => {

const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {
            console.log(response);
            setPokemon(response.data.results);
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            {pokemon.map((poke, i) => {
                return(
                    <div key={i}>
                        <p>{poke.name}</p>
                    </div>
                )
            })}
        </div>
        );
}

export default PokemonList;