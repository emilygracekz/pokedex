import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../api";
import PokemonDetailsCard from "./PokemonDetailsCard";
import { fetchPokemonDetailsByName } from "../api";
import { fetchEvolutionChainById } from "../api";

const PokemonSearch = () => {
	const [pokemonIndex, setPokemonIndex] = useState([]);
	const [pokemon, setPokemon] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [pokemonDetails, setPokemonDetails] = useState("");
	const [evolvesTo, setEvolvesTo] = useState("");
	const [moves, setMoves] = useState([]);
	const [types, setTypes] = useState([]);

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
		const pokemonDetails = await fetchPokemonDetailsByName(name);
		const evolutionChain = await fetchEvolutionChainById(pokemonDetails.id);

		setEvolvesTo(evolutionChain.chain.evolves_to[0].species.name);
		setMoves(pokemonDetails.moves);
		setTypes(pokemonDetails.types);

		setPokemonDetails(name);
	};

	useEffect(() => {
		fetchPokemon();
	}, [searchValue]);

	return (
		<div className="pokedex__container">
			<input
				className="pokedex__search-input"
				value={searchValue}
				onChange={(e) => onSearchValueChange(e)}
				placeholder="Search Pokemon"
			/>
			<div className="pokedex__content">
				{pokemon.length !== 0 || searchValue === "" ? (
					<div className="pokedex__search-results">
						{pokemon.map((monster) => {
							return (
								<div className="pokedex__list-item" key={monster.name}>
									<span className="pokedex__monster-name">{monster.name}</span>
									<button onClick={onGetDetails(monster.name)}>
										Get Details
									</button>
								</div>
							);
						})}
					</div>
				) : (
					<p>No Results Found</p>
				)}
				{pokemonDetails ? (
					<PokemonDetailsCard
						pokemonDetails={pokemonDetails}
						types={types}
						moves={moves}
						evolvesTo={evolvesTo}
					/>
				) : null}
			</div>
		</div>
	);
};

export default PokemonSearch;
