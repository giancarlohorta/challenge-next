import {
  Box,
  Button,
  Container,
  Divider,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PokemonsList from "../../components/PokemonsList";
import constants from "../../helper/constants";
import useFetch from "../../hooks/useFetch";
import urls from "../../helper/urls";
import PageTitle from "../../components/PageTitle";
import ErrorComponent from "../../components/ErrorComponent";
import Helmet from "react-helmet";

const { FETCH_STATUS, NUMBER_ITEMS } = constants;

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, fetchStatus, request } = useFetch();

  const isError = fetchStatus === FETCH_STATUS.ERROR;
  const isLoading = fetchStatus === FETCH_STATUS.LOADING;

  const fetchPokemons = () => {
    request(urls.urlPokemons(page, NUMBER_ITEMS));
  };
  const handleSelectedPage = (_, value) => {
    setPage(value);
  };
  const handleReLoad = () => {
    fetchPokemons();
  };
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <Container>
      <Helmet title="All Pokemons" />
      <Paper elevation={3}>
        <PageTitle>
          <Typography variant="h3">All Pokemons</Typography>
          <Button variant="outlined" component="a" href="/favorite-pokemons">
            Favorite Pokemons
          </Button>
        </PageTitle>
        <Divider />
        {isError ? (
          <ErrorComponent onReload={handleReLoad} />
        ) : (
          <Box pb={5}>
            <PokemonsList dataPokemons={data?.results} loading={isLoading} />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={3}
            >
              <Pagination
                count={data?.count && parseInt(data?.count / NUMBER_ITEMS + 1)}
                page={page}
                onChange={handleSelectedPage}
              />
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Home;
