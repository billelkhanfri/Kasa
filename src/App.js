import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Routers from "./routes";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', Helvetica Neue, Helvetica, Arial, sans-serif;
      width:100%;
 
    }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers></Routers>
    </BrowserRouter>
  );
};

export default App;
