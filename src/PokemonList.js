import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
    return (
        <>
            {props.listpokemon.map((pokemon, index) => (
                <PokemonCard 
                    key={index} 
                    number={pokemon.number}
                    name={pokemon.name}
                    explanation={pokemon.explanation}
                    imageSrc={pokemon.imageSrc}
                    className={`gost poison`} 
                />
            ))}
        </>
    );
}

export default PokemonList;