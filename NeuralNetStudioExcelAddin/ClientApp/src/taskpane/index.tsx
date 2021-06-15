import "office-ui-fabric-react/dist/css/fabric.min.css";
import { App } from "./components/App";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
/* global document, Office, module, require */

initializeIcons();

let isOfficeInitialized = false;

const title = "Neural Net Studio Add-in";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component title={title} isOfficeInitialized={isOfficeInitialized} />
      </Provider>
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.initialize = () => {
  isOfficeInitialized = true;
  render(App);
};

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
