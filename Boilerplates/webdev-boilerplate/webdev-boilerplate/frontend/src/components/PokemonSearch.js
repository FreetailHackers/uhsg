import React from 'react';
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import Pokemon from './Pokemon';


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

    const formatOutput =  () => {
            const info =  Pokemon(pokemonName);
            const abilities = info.abilities;
            const height = info.height
            const moves = info.moves
            console.log(info)
            console.log(abilities)
            console.log(height)
            console.log(moves)

            // return (
            //     <div>
            //         {`Ability 1: ${abilities[0].ability.name}`}
                    
            //     </div>
            // )
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
            {formatOutput}
        </InputGroup>
        
    );
}

export default PokemonSearch;