import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Socket from "../../Socket";
import { Chat } from "../Chat/Chat";
import { Top } from "../top/Top";
import { selectDisplayNo } from "./appSlice";
import { displayList } from "./appSlice";

function App() {
  const displayNo = useSelector(selectDisplayNo);

  return (
    <div>
      {/* <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/chat" component={Chat} />
      </Switch> */}
      {displayNo == displayList.SignIn && <Top />}
      {displayNo == displayList.Chat && <Chat />}
      <Socket />
    </div>
  );
}

export default App;
