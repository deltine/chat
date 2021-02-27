import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  selectRecvCount,
} from "./tempSlice";
import { Button, Input } from "@material-ui/core";
import { tempStyles } from "./TempStyle";

export function Temp() {
  const classes = tempStyles();
  const count = useSelector(selectCount);
  const recvCount = useSelector(selectRecvCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className={classes.back}>
      count : {count}
      <br />
      recvCount : {recvCount}
      <br />
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <br />
      <Input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <Button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </Button>
      <br />
      <Button
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      >
        Add Async
      </Button>
    </div>
  );
}
