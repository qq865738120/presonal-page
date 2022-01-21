import "./src/styles/normalize.css";
import "./src/styles/common.scss";
import "./src/styles/icon.scss";
import "asciinema-player/dist/bundle/asciinema-player.css";
import React from "react";
import { Provider } from "react-redux";
import createStore from "./src/state/createStore";
import { NotificationsProvider } from "@mantine/notifications";
export const onInitialClientRender = () => {};

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
