import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./api";
import PokemonSearchCard from "./Components/PokemonDetailsCard"
import PokemonDetailsCard from "./Components/PokemonDetailsCard"

function App() {
	const [pokemonIndex, setPokemonIndex] = useState([]);
	const [pokemon, setPokemon] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [pokemonDetails, setPokemonDetails] = useState();

	const onSearchValueChange = (event) => {
		const value = event.target.value;
		setSearchValue(value);
		setPokemon(pokemonIndex.filter((monster) => monster.name.includes(value)));
	};

    const fetchPokemon = async () => {
        const { results: pokemonList } = await fetchAllPokemon();
        setPokemonIndex(pokemonList);
    };

	const onGetDetails = (name) => async () => {
		/** code here **/
	};

	useEffect(() => {
		fetchPokemon()
	}, [searchValue]);

	return (
		<div className="pokedex__container">
			{/* <div className={"pokedex__search-input"}> */}
				<label htmlFor="Search Pokemon">
					Search Pokemon
					<input
						value={searchValue}
						onChange={(e) => onSearchValueChange(e)}
						placeholder="Search Pokemon"
					/>
				</label>
			{/* </div> */}
			{/* <div className={"pokedex__content"}> */}
				{pokemon.length > 0 ? (
					<div className="pokedex__search-results">
						{pokemon.map((monster) => {
							return (
								<div className="pokedex__list-item" key={monster.name}>
									<span className="monster-name">{monster.name}</span>
									<button onClick={onGetDetails(monster.name)}>
										Get Details
									</button>
								</div>
							);
						})}
					</div>
				) : <p>No Results Found</p>}
				{pokemonDetails ? (
					<div className="pokedex__details">
                        <PokemonDetailsCard />
                    </div>
				) : null}
			</div>
		// </div>
	);
}

export default App;
