import urls from "./urls";

const pokemons = [
  {
    name: "Pokemon 1",
    url: urls.urlDetails(1),
  },
  {
    name: "Pokemon 2",
    url: urls.urlDetails(2),
  },
];

const responseDataPokemons = {
  count: 1154,
  next: null,
  previus: null,
  results: pokemons,
};
const responseDataPokemonDetails = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 64,
  forms: [],
  game_indices: [],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [],
  name: "bulbasaur",
  order: 1,
  past_types: [],
  species: {},
  sprites: {},
  stats: [],
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  weight: 69,
};

const localStorageMock = {
  pokemons: [
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
  ],
};

const mockData = {
  pokemons,
  responseDataPokemons,
  responseDataPokemonDetails,
  localStorageMock,
};

export default mockData;
