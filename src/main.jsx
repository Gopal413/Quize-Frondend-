import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material';
import Theme from './Components/Themes/Theme.jsx';
import store from './ReduxOperation/Store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={Theme} >
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
