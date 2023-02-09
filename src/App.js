
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', Helvetica Neue, Helvetica, Arial, sans-serif;
      width:100%;
      margin: auto;
    }
`


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>






  );
};

export default App;
