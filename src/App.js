import './App.css';
import Header from './Header';
import Title from './Title';
import PokemonList from './PokemonList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/api/pokemons';

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async () => {
        try {
            const res = await axios.get(SERVER_URL);
            console.log(res);
            setPokemons(res.data);
        } catch (err) {
            console.log(err);
            setPokemons([]);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    
    return (
        <div>
            <Header />
            <Title className="white" />
            <div className="pokemon-container">
                <PokemonList listpokemon={pokemons} /> 
            </div>
        </div>
    );
}

export default App;
