import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
