import { Alert, Box, Button } from "@mui/material";

const ErrorComponent = ({ onReload }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Alert severity="error">error loading pokemons</Alert>
      <Button onClick={onReload}>load again</Button>
    </Box>
  );
};

export default ErrorComponent;
