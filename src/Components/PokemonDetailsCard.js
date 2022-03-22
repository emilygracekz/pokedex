

const PokemonDetailsCard = ({pokemonDetails, types, moves, evolvesTo}) => {

console.log(types, moves, evolvesTo)
    
    return (
        <div className="pokedex__details">
            <h1>{pokemonDetails}</h1>
        </div>
    )

}

export default PokemonDetailsCard