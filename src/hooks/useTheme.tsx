import * as React from "react";
import { isBrowser } from "../utils"

const useTheme = (theme) => {
  let myTheme = null;
  if (isBrowser()) {
    myTheme = localStorage.getItem("theme") || "";
  }
  return React.useState(myTheme || theme || "light");
};

export default useTheme;
