import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
// import { sendChatAction } from "../../Socket";

interface TempState {
  value: number;
  recvValue: number;
}

const initialState: TempState = {
  value: 0,
  recvValue: 0,
};

export const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      // sendChatAction(state.value.toString());
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incremantRecvValue: (state, action: PayloadAction<number>) => {
      console.log("incremantRecvValue:" + action.payload);
      state.recvValue = action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  incremantRecvValue,
} = tempSlice.actions;

// 非同期テンプレート
export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: RootState) => state.temp.value;
export const selectRecvCount = (state: RootState) => state.temp.recvValue;

export default tempSlice.reducer;
