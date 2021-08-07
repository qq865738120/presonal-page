import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./input.scss";
import Hotkeys from "react-hot-keys";

// 搜索组件
const InputComponent = ({ currentTheme }) => {
  const myIndex =
    window !== "undefined" ? localStorage.getItem("searchIndex") : 0;
  const [searchIndex, setSearchIndex] = React.useState(Number(myIndex) || 0);
  const [searchValue, setSearchValue] = React.useState("搜一搜");
  const [inputStyle, setInputStyle] = React.useState({});
  const [searchButtonStyle, setSearchButtonStyle] = React.useState({});
  const inputRef = React.useRef(null);
  const themeAndSearch = useStaticQuery(graphql`
    query QueryThemeAndQuerySearch {
      configYaml {
        page {
          search {
            label
            url
            parameter
          }
        }
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
  `);
  const searchList = themeAndSearch.configYaml.page.search;
  const theme = themeAndSearch.configYaml.theme;
  const color = theme[currentTheme].color;

  React.useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const onClick = () => {
    const currentSearch = searchList[searchIndex];
    window.open(
      `${currentSearch.url}?${currentSearch.parameter}=${searchValue}`
    );
  };

  return (
    <section className={`input-component input-component-${currentTheme}`}>
      <div className="tabs">
        {searchList.map((item, index) => (
          <span
            key={item.label}
            style={{
              color: searchIndex === index ? color.main : "",
            }}
            onClick={() => {
              localStorage.setItem("searchIndex", index);
              setSearchIndex(index);
            }}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="input">
        <Hotkeys keyName="a+c" onKeyDown={() => {
          setSearchValue("")
          inputRef.current.value = ''
        }}>
          <input
            ref={inputRef}
            style={{ ...inputStyle }}
            type="text"
            placeholder="搜一搜"
            onFocus={() =>
              setInputStyle({
                borderColor: color.main,
              })
            }
            onBlur={() => setInputStyle({})}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Hotkeys>
        <i
          className="icon icon-search"
          style={{ color: color.main, ...searchButtonStyle }}
          onMouseEnter={() => setSearchButtonStyle({ fontSize: "0.6rem" })}
          onMouseLeave={() => setSearchButtonStyle({})}
          onClick={onClick}
        />
      </div>
    </section>
  );
};

export default InputComponent;
