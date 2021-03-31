import React from 'react';
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import Pokemon from '../Pokemon/Pokemon';


function PokemonSearch() {
    const [pokemonName, setPokemonName] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = () => {
        if (pokemonName.length === 0) {
            setSubmit(false);
        } else {
            setSubmit(true);
        }
        console.log(pokemonName)
    }

    const handlePokemonChange = (event) => {
        setPokemonName(event.target.value.toLowerCase())
    }

    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter a Pokemon name"
            onChange={ e => handlePokemonChange(e)}
            />
            <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
            </InputGroup.Append>
            {Pokemon(pokemonName)}
        </InputGroup>
    );
}

export default PokemonSearch;