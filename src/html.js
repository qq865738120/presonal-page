import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {

  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>'个人首页'</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
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

              const docEl = document.documentElement;
              const resizeEvt =
                "orientationchange" in window ? "orientationchange" : "resize";
              const recalc = () => {
                const clientWidth = docEl.clientWidth;
                if (flag) {
                  docEl.style.fontSize = clientWidth / 32 + "px";
                } else {
                  docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
                }
              };
              window.addEventListener(resizeEvt, recalc, false);
              document.addEventListener("DOMContentLoaded", recalc, false);
        `,
          }}
        /> */}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
