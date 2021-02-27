import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import tempReducer from "../features/temp/tempSlice";
import appReducer from "../features/app/appSlice";
import topReducer from "../features/top/topSlice";
import chatReducer from "../features/Chat/chatSlice";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    temp: tempReducer,
    app: appReducer,
    top: topReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
