import { Box } from "@mui/material";
import { useStyles } from "./PageTitle.styles";

const PageTitle = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.title}>{children}</Box>;
};

export default PageTitle;
