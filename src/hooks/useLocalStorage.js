import { useEffect, useState } from "react";

const useLocalStorage = (key, inicial) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  const hasOnLocalStorage = JSON.parse(state).pokemons;

  const addPokemon = (pokemon) => {
    try {
      if (!hasOnLocalStorage?.find(({ url }) => url === pokemon.url)) {
        const setPokemons = [...hasOnLocalStorage, pokemon];
        setState(
          JSON.stringify({
            pokemons: setPokemons,
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removePokemon = (pokemon) => {
    try {
      if (hasOnLocalStorage?.find(({ url }) => url === pokemon.url)) {
        const setPokemons = hasOnLocalStorage.filter(
          ({ url }) => url !== pokemon.url
        );
        setState(
          JSON.stringify({
            pokemons: setPokemons,
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return { removePokemon, addPokemon, hasOnLocalStorage };
};
export default useLocalStorage;
