import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    maxWidth: 400,
  },
  label: {
    padding: theme.spacing(1, 2),
    backgroundColor: "#333",
    color: "#eee",
    borderRadius: theme.shape.borderRadius,
    "&:first-child": {
      marginRight: theme.spacing(1.5),
    },
  },
  details: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));
