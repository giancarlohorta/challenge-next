import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PokemonsList from "../../components/PokemonsList";
import PageTitle from "../../components/PageTitle";
import useLocalStorage from "../../hooks/useLocalStorage";

const FavoritePokemons = () => {
  const { hasOnLocalStorage } = useLocalStorage("favorites");

  const isEmpty = hasOnLocalStorage.length === 0;
  return (
    <Container>
      <Paper>
        <PageTitle>
          <Typography variant="h3">My Favorite Pokemons</Typography>
          <Button variant="outlined" component="a" href="/">
            All Pokemons
          </Button>
        </PageTitle>
        <Divider />

        {isEmpty ? (
          <Box
            py={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h5">
              You don't have any pokemon on your list
            </Typography>
          </Box>
        ) : (
          <Box py={3}>
            <PokemonsList dataPokemons={hasOnLocalStorage} loading={false} />
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default FavoritePokemons;
