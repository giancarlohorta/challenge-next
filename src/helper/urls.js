const urlDetails = (params) => `https://pokeapi.co/api/v2/pokemon/${params}/`;

const urlPokemons = (page, numberItens) =>
  `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * numberItens
  }&limit=${numberItens}`;

const urlImage = (number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

const urls = {
  urlDetails,
  urlPokemons,
  urlImage,
};

export default urls;
