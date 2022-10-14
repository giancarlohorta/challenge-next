import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import FavoritePokemons from "./pages/FavoritePokemons/FavoritePokemons";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":pokeId" element={<PokemonDetails />} />
        <Route path="/favorite-pokemons" element={<FavoritePokemons />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
