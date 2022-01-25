import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import Navigation from './components/Navbar';
import Rockets from './components/Rockets';
import MissionList from './components/MissionList';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<MissionList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
