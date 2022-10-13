import {
  Box,
  Link,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import functions from "../../helper/functions";
import { useStyles } from "./PokemonItem.styles";

const PokemonItem = ({ number, name, loading }) => {
  const classes = useStyles();
  return (
    <ListItemButton component={Link} to={`/${number}`} aria-label={name}>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={1}
        >
          <Skeleton variant="rect" animation="wave" width={300} height={40} />
          <Skeleton variant="rect" animation="wave" width={200} height={200} />
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={1}
        >
          {loading ? (
            <Skeleton variant="rect" animation="wave" width={300} height={40} />
          ) : (
            <ListItemText>
              <Typography variant="h4">
                #{number} {functions.formatFirstLetterCapsLock(name)}
              </Typography>
            </ListItemText>
          )}
          {loading ? (
            <Skeleton
              variant="rect"
              animation="wave"
              width={200}
              height={200}
            />
          ) : (
            <img
              className={classes.image}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
              alt={name}
            />
          )}
        </Box>
      )}
    </ListItemButton>
  );
};

export default PokemonItem;
