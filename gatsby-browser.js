import "./src/styles/normalize.css";
// import "@fontsource/open-sans"
import "./src/styles/common.scss";
import "./src/styles/icon.scss";
import "./src/styles/iconfont.scss";

const isPC = () => {
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

(() => {
  const docEl = document.documentElement;
  const resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  const recalc = () => {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (isPC()) {
      docEl.style.fontSize = "100px";
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
    }
  };
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener("DOMContentLoaded", recalc, false);
})();