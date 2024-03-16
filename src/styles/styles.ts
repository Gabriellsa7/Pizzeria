import { createGlobalStyle } from "styled-components";
import backGroundImg from "../assets/background.png";

const Theme = {
  backgroundImage: `url(${backGroundImg}) fixed center/cover`,
  color: {
    background: "#FFDFCE",

    primary: {
      background: "#EA9363",
      buttons: "#E65200",
      header: "#E65200",
      contrastText: "#000000",
    },

    secondary: {
      buttons: "#D9D9D9",
      background: "#E65200",
      contrastTextPrimary: "#FFFFFF",
      contrastTextSecondary: "#E65200",
      backgroundLeft: "rgba(163, 163, 163, 0.5)",
    },
  },

  inputs: {
    background: "#D9D9D9",
    padding: "1.5em 12em 1.5em 3em",
    style: "1px solid black",

    hover: {
      background: "#ABA9A9",
    },
  },

  buttons: {
    padding: "1.5em 9em",

    text: {
      size: "18px",
      weight: "400",
    },

    hover: {
      cursor: "pointer",
      background: "#ABA9A9",
    },
  },

  border: {
    radius: "20px",
    style: "none",
  },

  font: {
    xs: "0.75rem",
    sm: "0.875rem",
    default: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    xx: "2rem",

    weight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "bold", //700,
    },
  },
};

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
  }
`;

export default Theme;
