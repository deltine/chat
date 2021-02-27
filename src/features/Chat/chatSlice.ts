import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Message } from "../../IF";

interface TempState {
  signInMessage: Message | null;
  messageList: Array<Message>;
}

const initialState: TempState = {
  signInMessage: null,
  messageList: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addSignInMessage: (state, action: PayloadAction<Message>) => {
      console.log("addSignInMessage");
      state.signInMessage = action.payload;
    },

    addMessage: (state, action: PayloadAction<Message>) => {
      console.log("addMessage");
      state.messageList.push(action.payload);
    },
  },
});

export const { addSignInMessage, addMessage } = chatSlice.actions;

export const selectSignInMessage = (state: RootState) =>
  state.chat.signInMessage;
export const selectMessageList = (state: RootState) => state.chat.messageList;

export default chatSlice.reducer;
