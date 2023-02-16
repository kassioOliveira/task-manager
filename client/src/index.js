import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyled, { ContainerLayout } from './globalStyle';
import App from './App';
import ContextProvider from './Hooks/Contexts';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <GlobalStyled/>
    <ContainerLayout>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  

    </ContainerLayout>
  
    </ContextProvider>
  </React.StrictMode>
);

