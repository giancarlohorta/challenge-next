import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import constants from "../../helper/constants";
import useLocalStorage from "../../hooks/useLocalStorage";
import functions from "../../helper/functions";
import urls from "../../helper/urls";
import FavoriteButton from "../../components/FavoriteButton";
import { useStyles } from "./PokemonDetails.styles";
import PageTitle from "../../components/PageTitle";
import ErrorComponent from "../../components/ErrorComponent";
import Helmet from "react-helmet";

const { FETCH_STATUS } = constants;

const PokemonDetails = () => {
  const classes = useStyles();

  const { pokeId } = useParams();
  const [dataPokemon, setDataPokemon] = useState();
  const { data, fetchStatus, request } = useFetch();
  const { removePokemon, addPokemon, hasOnLocalStorage } = useLocalStorage(
    "favorites",
    JSON.stringify({
      pokemons: [],
    })
  );
  const [favorite, setFavorite] = useState(
    hasOnLocalStorage?.find(({ url }) => url === urls.urlDetails(pokeId))
  );

  const isLoading = fetchStatus === FETCH_STATUS.LOADING;
  const isError = fetchStatus === FETCH_STATUS.ERROR;
  const toggleFavoritePokemon = () => {
    const pokemon = {
      name: dataPokemon.name,
      url: urls.urlDetails(pokeId),
    };
    if (favorite) {
      removePokemon(pokemon);
      setFavorite(!favorite);
    } else {
      addPokemon(pokemon);
      setFavorite(!favorite);
    }
  };
  useEffect(() => {
    if (fetchStatus === FETCH_STATUS.INITIAL) request(urls.urlDetails(pokeId));
    if (fetchStatus === FETCH_STATUS.DONE)
      setDataPokemon(functions.normalizeDetails(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStatus]);
  return (
    <Container>
      <Helmet title={functions.formatFirstLetterCapsLock(dataPokemon?.name)} />
      <Paper>
        <PageTitle>
          <Button variant="outlined" component="a" href="/">
            All Pokemons
          </Button>
          {isLoading || isError ? (
            <Skeleton variant="text" width={400} height={50} />
          ) : (
            <Typography variant="h3">
              #{dataPokemon?.id}{" "}
              {functions.formatFirstLetterCapsLock(dataPokemon?.name)}
            </Typography>
          )}

          <Button variant="outlined" component="a" href="/favorite-pokemons">
            Favorite Pokemons
          </Button>
        </PageTitle>
        <Divider />
        {isError ? (
          <ErrorComponent />
        ) : (
          <Box p={3} className={classes.details}>
            <Box
              width={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {isLoading ? (
                <Skeleton variant="rect" width={400} height={400} />
              ) : (
                <img
                  className={classes.image}
                  src={urls.urlImage(pokeId)}
                  alt={dataPokemon?.name}
                />
              )}
            </Box>
            <Box width={1}>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Typography variant="h5">Details:</Typography>
                <FavoriteButton
                  toggleFavoritePokemon={toggleFavoritePokemon}
                  favorite={favorite}
                />
              </Box>
              <Box>
                <Box display="flex">
                  <Typography mr={0.5}>Height:</Typography>
                  {isLoading ? (
                    <Skeleton variant="text" width={50} height={25} />
                  ) : (
                    <Typography>{dataPokemon?.height / 10}m</Typography>
                  )}
                </Box>
                <Box display="flex">
                  <Typography mr={0.5}>Weight:</Typography>
                  {isLoading ? (
                    <Skeleton variant="text" width={50} height={25} />
                  ) : (
                    <Typography>{dataPokemon?.weight / 10}Kg</Typography>
                  )}
                </Box>
                <Typography variant="h6">Types:</Typography>

                <Box display="flex" my={1}>
                  {isLoading ? (
                    <>
                      <Skeleton variant="text" width={70} height={40} />
                    </>
                  ) : (
                    dataPokemon?.types?.map((name) => {
                      return (
                        <Box key={name} className={classes.label}>
                          <Typography>
                            {functions.formatFirstLetterCapsLock(name)}
                          </Typography>
                        </Box>
                      );
                    })
                  )}
                </Box>
                <Typography variant="h6">Abilities:</Typography>
                <Box display="flex" my={1}>
                  {isLoading ? (
                    <>
                      <Skeleton variant="text" width={70} height={40} />
                    </>
                  ) : (
                    dataPokemon?.abilities?.map((name) => {
                      return (
                        <Box key={name} className={classes.label}>
                          <Typography>
                            {functions.formatFirstLetterCapsLock(name)}
                          </Typography>
                        </Box>
                      );
                    })
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default PokemonDetails;
