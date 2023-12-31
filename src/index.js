// # Native React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ApiContextProvider from './contexts/APIRequestContext';
import App from './App';
import AccountContextProvider from './contexts/AccountContext';

// Styles
import "./styles/BaseStyle.css";
import "./styles/Responsive.css";
import "./styles/NavBar.css";
import "./styles/ButtonStyle.css";
import "./styles/BannerStyle.css";
import "./styles/CarouselStyle.css";

import "./styles/MainPage.css";
import "./styles/StockListStyle.css";
import "./styles/CompanyPageStyle.css";
import "./styles/SearchBarStyle.css";
import "./styles/FooterStyle.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountContextProvider>
    <ApiContextProvider>
    
        <App />
        
    </ApiContextProvider>
    </AccountContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
