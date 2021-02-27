import { makeStyles } from "@material-ui/core";

export const chatStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    height: 500,
    padding: "0.5em 1em",
    margin: "2em 0",
    border: "solid 3px #000000",
  },
  button: {
    align: "center",
    verticalAlign: "center",
  },
  systemMessageBox: { textAlign: "center" },
  meMessageBox: { textAlign: "left", backgroundColor: "#7ee47e" },
  yourMessageBox: { textAlign: "left" },
}));
