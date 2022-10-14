import functions from "./functions";
import urls from "./urls";

const data = {
  id: 1,
  name: "Pokemon",
  height: 9,
  weight: 8,
  types: [{ type: { name: "type1" } }, { type: { name: "type2" } }],
  abilities: [
    { ability: { name: "ability1" } },
    { ability: { name: "ability2" } },
  ],
  describe: "Loren",
};
const dataResponse = {
  id: 1,
  name: "Pokemon",
  height: 9,
  weight: 8,
  types: ["type1", "type2"],
  abilities: ["ability1", "ability2"],
};
describe("tests about functions", () => {
  test("should be normalized object", () => {
    expect(functions.normalizeDetails(data)).toEqual(dataResponse);
  });
  test("should be format name", () => {
    expect(functions.formatFirstLetterCapsLock("pokemon")).toEqual("Pokemon");
  });
});
describe("tests about urls", () => {
  test("should be url of details", () => {
    expect(urls.urlDetails(1)).toEqual("https://pokeapi.co/api/v2/pokemon/1/");
  });
  test("should be format name", () => {
    expect(urls.urlPokemons(1, 30)).toEqual(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"
    );
  });
});
