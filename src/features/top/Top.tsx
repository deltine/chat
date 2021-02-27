import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, selectName } from "./topSlice";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { topStyles } from "./topStyle";
import { displayChange, displayList } from "../app/appSlice";

export function Top() {
  const classes = topStyles();
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.tittle}>
        <Typography component="h1" variant="h2">
          chat app.
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userName"
          label="User Name"
          name="userName"
          autoComplete="userName"
          autoFocus
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => dispatch(displayChange(displayList.Chat))}
          // href="/chat"
        >
          Sign in
        </Button>
      </div>
    </Container>
  );
}
