const urlDetails = (params) => `https://pokeapi.co/api/v2/pokemon/${params}/`;

const urlPokemons = (page, numberItens) =>
  `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * numberItens
  }&limit=${numberItens}`;

const urls = {
  urlDetails,
  urlPokemons,
};

export default urls;
