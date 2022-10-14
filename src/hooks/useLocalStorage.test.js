import { act, renderHook } from "@testing-library/react";
import mockData from "../helper/mock.example";
import useLocalStorage from "./useLocalStorage";

test("should receive the data", async () => {
  const { result } = renderHook(() =>
    useLocalStorage("favorites", JSON.stringify(mockData.localStorageMock))
  );

  expect(result.current.hasOnLocalStorage).toEqual(
    mockData.localStorageMock.pokemons
  );
});
test("add pokemon", async () => {
  const { result } = renderHook(() =>
    useLocalStorage("favorites", JSON.stringify(mockData.localStorageMock))
  );

  act(() => {
    result.current.addPokemon(mockData.pokemons[0]);
  });

  expect(result.current.hasOnLocalStorage.length).toEqual(
    mockData.localStorageMock.pokemons.length + 1
  );
});
test("remove pokemon", async () => {
  const { result } = renderHook(() =>
    useLocalStorage("favorites", JSON.stringify(mockData.localStorageMock))
  );
  act(() => {
    result.current.addPokemon(mockData.pokemons[0]);
  });
  expect(result.current.hasOnLocalStorage.length).toEqual(
    mockData.localStorageMock.pokemons.length + 1
  );
  act(() => {
    result.current.removePokemon(mockData.pokemons[0]);
  });
  expect(result.current.hasOnLocalStorage.length).toEqual(
    mockData.localStorageMock.pokemons.length
  );
});
