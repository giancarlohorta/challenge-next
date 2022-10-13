import { makeStyles } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));
