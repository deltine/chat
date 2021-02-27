import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { AppContainer } from "react-hot-loader";
import App from "./features/app/App";
import { store, history } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <App />
        {/* </ConnectedRouter> */}
      </Provider>
    </AppContainer>,
    document.querySelector("#root")
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./", () => {
    render();
  });
}

serviceWorker.unregister();
