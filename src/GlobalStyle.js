import { createGlobalStyle } from "styled-components";
import { GlobalClasses } from "./GlobalClasses";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
  ${GlobalClasses}
`;
