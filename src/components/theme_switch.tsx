import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./theme_switch.scss";
import { useSelector, useDispatch } from "react-redux";
import { ActionType } from "../state/createStore";
import { GlobalHotKeys } from "react-hotkeys";

// 搜索组件
const ThemeSwitchComponent = ({ onChange }) => {
  const queryResult = useStaticQuery(graphql`
    query MyQuery {
      configYaml {
        theme {
          dark {
            color {
              main
              second
            }
          }
          light {
            color {
              main
              second
            }
          }
        }
        configuration {
          default {
            theme
          }
        }
      }
    }
  `).configYaml;
  const { theme, configuration } = queryResult;
  const currentTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: ActionType.SET_THEME_MODE,
      theme: configuration.default.theme,
    });
  }, []);

  const onClick = React.useCallback(
    (currentTheme) => {
      onChange && onChange(currentTheme);
      dispatch({
        type: ActionType.SET_THEME_MODE,
        theme: currentTheme,
      });
    },
    [dispatch]
  );

  return (
    <section
      className={`theme-switch-component theme-switch-component-${currentTheme}`}
    >
      <div
        className="bg"
        style={{ left: currentTheme === "light" ? 0 : "0.55rem" }}
      />
      <i
        className="icon icon-Sun"
        style={
          currentTheme === "light"
            ? { color: theme[currentTheme].color.second }
            : {}
        }
        onClick={() => onClick("light")}
      />
      <i
        className="icon icon-moon"
        style={
          currentTheme === "dark"
            ? { color: theme[currentTheme].color.second }
            : {}
        }
        onClick={() => onClick("dark")}
      />
      <GlobalHotKeys
        keyMap={{ SWITCH_LIGHT_MODE: "shift+l", SWITCH_DART_MODE: "shift+d" }}
        handlers={{
          SWITCH_LIGHT_MODE: () => onClick("light"),
          SWITCH_DART_MODE: () => onClick("dark"),
        }}
      />
    </section>
  );
};

export default ThemeSwitchComponent;
