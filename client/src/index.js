import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './globalStyle';
import App from './App';
import ContextProvider from './Hooks/ContextSideBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <GlobalStyled/>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

