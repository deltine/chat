import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface TempState {
  name: string;
}

const initialState: TempState = {
  name: "",
};

export const tempSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = tempSlice.actions;

export const selectName = (state: RootState) => state.top.name;

export default tempSlice.reducer;
