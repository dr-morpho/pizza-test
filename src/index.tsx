import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import App from './App';
import './styles/index.tsx';
import { GlobalStyle } from './styles';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
);
