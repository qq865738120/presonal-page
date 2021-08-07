import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./theme_switch.scss";
import useTheme from "../hooks/useTheme";

// 搜索组件
const ThemeSwitchComponent = ({ onChange }) => {
  const [currentTheme, setCurrentTheme] = useTheme();

  const theme = useStaticQuery(graphql`
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
      }
    }
  `).configYaml.theme;

  const onClick = (currentTheme) => {
    onChange && onChange(currentTheme);
    setCurrentTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

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
    </section>
  );
};

export default ThemeSwitchComponent;
