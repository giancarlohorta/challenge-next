import { Button } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";

const FavoriteButton = ({ toggleFavoritePokemon, favorite }) => {
  return (
    <Button onClick={toggleFavoritePokemon} aria-label="Favorite Button">
      {favorite ? (
        <FavoriteOutlinedIcon data-testid="favorite" />
      ) : (
        <FavoriteBorderOutlinedIcon data-testid="not-favorite" />
      )}
    </Button>
  );
};

export default FavoriteButton;
