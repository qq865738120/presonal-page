import * as React from "react";

const useTheme = (theme) => {
  const myTheme = window !== "undefined" ? localStorage.getItem("theme") : "";
  return React.useState(myTheme || theme || "light");
};

export default useTheme;
