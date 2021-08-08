import "./src/styles/normalize.css";
import "./src/styles/common.scss";
import "./src/styles/icon.scss";
import "./src/styles/iconfont.scss";
import React from "react";
import { Provider } from "react-redux";
import createStore from "./src/state/createStore";

export const onInitialClientRender = () => {};

const keyMap = {
  SNAP_LEFT: "command+left",
  DELETE_NODE: ["a+s", "backspace", "a+enter"],
};
export const wrapRootElement = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};
