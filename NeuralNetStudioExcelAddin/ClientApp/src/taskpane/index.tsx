import "@fluentui/react/dist/css/fabric.min.css";
import { App } from "./components/App";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@fluentui/react";
import { myTheme } from "./Theme";
/* global document, Office, module, require */

initializeIcons();

let isOfficeInitialized = false;
let isUIDebug = false; //For test in Browser without office

const render = (Component) => {
  ReactDOM.render(
    <ThemeProvider applyTo="body" theme={myTheme}>
      <AppContainer>
        <Provider store={store}>
          <Component isOfficeInitialized={isOfficeInitialized} />
        </Provider>
      </AppContainer>
    </ThemeProvider>,
    document.getElementById("container")
  );
};

if (isUIDebug) {
  render(App);
} else {
  /* Render application after Office initializes */
  Office.initialize = () => {
    isOfficeInitialized = true;
    render(App);
  };
}

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
