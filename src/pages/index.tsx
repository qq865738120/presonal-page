import * as React from "react";
import "./home.scss";
import InputComponent from "../components/input";
import ThemeSwitchComponent from "../components/theme_switch";
import ContentBoxComponent from "../components/content_box";
import { graphql } from "gatsby";
import backgroundLightImg from "../images/background_light.png";
import backgroundDarkImg from "../images/background_dark.png";
import { useSelector } from 'react-redux';

// markup
const IndexPage = () => {
  const currentTheme = useSelector(state => state.theme);

  return (
    <main className={`index-page index-page-${currentTheme}`}>
      <section className="content">
        <div className="theme-switch">
          <ThemeSwitchComponent />
        </div>
        <InputComponent />
        <ContentBoxComponent />
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
