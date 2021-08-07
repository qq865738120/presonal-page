import * as React from "react";
import "./index.scss";
import InputComponent from "../components/input";
import ThemeSwitchComponent from "../components/theme_switch";
import ContentBoxComponent from "../components/content_box";
import { graphql } from "gatsby";
import backgroundLightImg from "../images/background_light.png";
import backgroundDarkImg from "../images/background_dark.png";
import useTheme from "../hooks/useTheme";

// markup
const IndexPage = () => {
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <main className={`index-page index-page-${currentTheme}`}>
      <section className="content">
        <div className="theme-switch">
          <ThemeSwitchComponent
            onChange={(currentTheme) => setCurrentTheme(currentTheme)}
          />
        </div>
        <InputComponent currentTheme={currentTheme} />
        <ContentBoxComponent currentTheme={currentTheme} />
      </section>

      <img
        className="background-img"
        src={currentTheme === "light" ? backgroundLightImg : backgroundDarkImg}
        alt="bg"
      />
      <img
        className="background-cover"
        src={currentTheme === "light" ? backgroundLightImg : backgroundDarkImg}
        alt="bg"
      />
    </main>
  );
};

// export const query = graphql`
//   # query will go here
// `;

export default IndexPage;
