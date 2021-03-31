import { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import axios from 'axios';


function Pokemon({ name }) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await fetch(url + name);
                const pokemonInfo = await response.json();
                setPokemon(pokemonInfo);
                console.log(pokemon);
            } catch (error) {
                console.error(error)
            }
        };
        getPokemon();
    },[name]);

    return (
        pokemon.abilities != undefined ?  <div>{pokemon.abilities[0].name}</div> : null
    );
}

export default Pokemon;