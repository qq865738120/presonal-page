import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./input.scss";
import { isBrowser } from "../utils";
import { useSelector } from "react-redux";

// 搜索组件
const InputComponent = () => {
  const [searchIndex, setSearchIndex] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("搜一搜");
  const [inputStyle, setInputStyle] = React.useState({});
  const [searchButtonStyle, setSearchButtonStyle] = React.useState({});
  const currentTheme = useSelector((state) => state.theme);
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
  const color = React.useMemo(() => theme[currentTheme].color, [currentTheme]);

  React.useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const onClick = React.useCallback(() => {
    const currentSearch = searchList[searchIndex];
    window.open(
      `${currentSearch.url}?${currentSearch.parameter}=${searchValue}`
    );
  });

  return (
    <section className={`input-component input-component-${currentTheme}`}>
      {/* <HotKeys handlers={handlers}> */}
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
