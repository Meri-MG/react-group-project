import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Provider } from 'react-redux';
// import store from './redux/configureStore';
import './index.css';
import Navigation from './components/Navbar';
import View from './components/View';
import MissionsList from './components/MissionList';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/MissionList" element={<MissionsList />} />
      </Routes>
      <View />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
