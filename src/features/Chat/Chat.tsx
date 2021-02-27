import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Grid,
  List,
  Paper,
  TextField,
} from "@material-ui/core";
import { sendChat, signIn } from "../../Socket";
import { selectName } from "../top/topSlice";
import { selectSignInMessage } from "./chatSlice";
import { chatStyles } from "./ChatStyle";
import { Message } from "../../IF";
import { RootState } from "../../app/store";

export function Chat() {
  const classes = chatStyles();

  // Chat画面が呼ばれる前に値を設定
  const name = useSelector(selectName);
  const [text, setText] = useState("");
  // signIn()のレスポンスを設定
  const signInMessage = useSelector(selectSignInMessage);
  // チャット内容を設定
  const messageList = useSelector((state: RootState) => state.chat.messageList);

  useEffect(() => {
    console.log("signIn");
    signIn(name);
  }, []);

  const addMessage = () => {
    if (signInMessage == null) return;
    console.log("auth: " + signInMessage.auth);
    console.log("name: " + signInMessage.name);
    console.log("uuid: " + signInMessage.uuid);
    console.log("message: " + signInMessage.message);
    sendChat({
      auth: signInMessage.auth,
      name: signInMessage.name,
      uuid: signInMessage.uuid,
      message: text,
    });
  };

  const ShowMessegeList = () => {
    return (
      <List className={classes.root}>
        {messageList.map((message: Message, index: number) =>
          comment(message, index)
        )}
      </List>
    );
  };

  const comment = (message: Message, index: number) => {
    if (message.uuid == null) {
      // 不正なメッセージ
      return <div key={index}>不正なデータ</div>;
    } else {
      if (message.message == null) {
        // ログイン
        return (
          <div className={classes.systemMessageBox} key={index}>
            [{message.name}]がログインしました。
          </div>
        );
      } else if (signInMessage!.uuid == message.uuid) {
        // 自分
        return (
          <div className={classes.meMessageBox} key={index}>
            {message.name}: 「{message.message}」
          </div>
        );
      } else {
        // 自分以外
        return (
          <div className={classes.yourMessageBox} key={index}>
            {message.name}: 「{message.message}」
          </div>
        );
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <div>
        <ShowMessegeList />

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <div className={classes.button}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={addMessage}
              >
                Send
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
