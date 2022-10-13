import { List } from "@mui/material";
import PokemonItem from "../PokemonItem/PokemonItem";

const ghostTransactions = new Array(5)
  .fill({})
  .map((_, index) => ({ key: index }));

const PokemonsList = ({ dataPokemons, loading }) => {
  return (
    <List>
      {(loading ? ghostTransactions : dataPokemons)?.map((pokemon) => {
        const pokemonNumber = pokemon.url?.slice(34, pokemon.url.length - 1);
        return (
          <PokemonItem
            key={loading ? pokemon.key : pokemonNumber}
            number={pokemonNumber}
            name={pokemon.name}
            loading={loading}
          />
        );
      })}
    </List>
  );
};

export default PokemonsList;
