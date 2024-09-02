// src/index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { UserProvider } from './contexts/UserContexts';
import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import theme from './styles/theme';

const { ToastContainer, toast } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <Router>
              <App />
              <ToastContainer />
            </Router>
          </ChakraProvider>
        </UserProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

toast({ title: 'Chakra UI' });