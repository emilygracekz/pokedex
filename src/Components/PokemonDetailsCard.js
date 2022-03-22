const PokemonDetailsCard = ({ pokemonDetails, types, moves, evolvesTo }) => {
	return (
		<div className="pokedex__details">
			<h1 className="pokedex__detail-header">{pokemonDetails}</h1>
			<div className="pokedex__detail-row">
				<div>
					<h2 className="pokedex__detail-header">Types</h2>
					{types
						? types.map((pokemonType) => (
								<p className="pokedex__detail-text">{pokemonType.type.name}</p>
						  ))
						: null}
				</div>
				<div>
					<h2 className="pokedex__detail-header">Moves</h2>
					{moves ? (
						<>
							<p>{moves[0].move.name}</p>
							<p>{moves[1].move.name}</p>
							<p>{moves[2].move.name}</p>
							<p>{moves[3].move.name}</p>
						</>
					) : null}
				</div>
			</div>
			<h2 className="pokedex__detail-header">Evolutions</h2>
			<p className="pokedex__detail-text">{evolvesTo ? evolvesTo : "None"}</p>
		</div>
	);
};

export default PokemonDetailsCard;
