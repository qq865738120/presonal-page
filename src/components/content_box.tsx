import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./content_box.scss";
import { useSelector } from 'react-redux';

// 搜索组件
const ContentBoxComponent = () => {
  const [labelStyle, setLabelStyle] = React.useState([{}]);
  const [iconStyle, setIconStyle] = React.useState([{}]);
  const currentTheme = useSelector(state => state.theme);
  const themeAndSearch = useStaticQuery(graphql`
    query QueryThemeAndCollect {
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
        page {
          collect {
            icon
            label
            url
          }
        }
      }
    }
  `);
  const collectList = themeAndSearch.configYaml.page.collect;
  const theme = themeAndSearch.configYaml.theme;
  const color = React.useMemo(() => theme[currentTheme].color, [currentTheme])

  return (
    <section
      className={`content-box-component content-box-component-${currentTheme}`}
    >
      {collectList.map((item, index) => (
        <div
          className="item"
          key={item.label}
          onMouseEnter={() => {
            const style = [].concat(labelStyle);
            style[index] = { color: color.second };
            setLabelStyle(style);
            const iconStyle = [].concat(iconStyle);
            iconStyle[index] = { fontSize: "1.1rem" };
            setIconStyle(iconStyle);
          }}
          onMouseLeave={() => {
            setLabelStyle([{}]);
            setIconStyle([{}]);
          }}
          onClick={() => window.open(item.url)}
        >
          <i style={iconStyle[index]} className={`iconfont ${item.icon}`} />
          <span style={labelStyle[index]}>{item.label}</span>
        </div>
      ))}
    </section>
  );
};

export default ContentBoxComponent;
