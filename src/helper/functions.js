export const normalizeDetails = (pokemon) => {
  return {
    id: pokemon?.id,
    name: pokemon?.name,
    height: pokemon?.height,
    weight: pokemon?.weight,
    types: pokemon?.types?.map(({ type }) => {
      return type.name;
    }),
    abilities: pokemon?.abilities?.map(({ ability }) => {
      return ability.name;
    }),
  };
};
export const formatFirstLetterCapsLock = (word) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

const functions = {
  normalizeDetails,
  formatFirstLetterCapsLock,
};
export default functions;
