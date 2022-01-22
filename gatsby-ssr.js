import React from "react";
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
import createStore from "./src/state/createStore";
import { NotificationsProvider } from "@mantine/notifications";
import { createStylesServer, ServerStyles } from "@mantine/ssr";

const stylesServer = createStylesServer();

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
  replaceBodyHTMLString(html);
};

export const wrapRootElement = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();
  return (
    <Provider store={store}>
      <NotificationsProvider>{element}</NotificationsProvider>
    </Provider>
  );
};
