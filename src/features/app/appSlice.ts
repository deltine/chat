import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

export const displayList = {
  SignIn: 0,
  Chat: 1,
} as const;

interface AppState {
  displayNo: number;
}

const initialState: AppState = {
  displayNo: displayList.SignIn,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    displayChange: (state, action: PayloadAction<number>) => {
      state.displayNo = action.payload;
    },
  },
});

export const { displayChange } = appSlice.actions;

export const selectDisplayNo = (state: RootState) => state.app.displayNo;

export default appSlice.reducer;
