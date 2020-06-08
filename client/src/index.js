import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import config from './config';
import GlobalStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={config.theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
