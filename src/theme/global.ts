import { createGlobalStyle, css } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle(
  () => css`
    ${reset};

    #__next {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
    }
  `
);
