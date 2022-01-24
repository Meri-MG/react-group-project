import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import Navigation from './components/Navbar';
import View from './components/View';
import Rockets from './components/Rockets';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <View />
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
