import React from 'react';
import { Link } from 'react-router-dom';
import planet from './planet.png';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <div className="logo-wrapper">
        <img src={planet} alt="id" width="40px" height="40px" />
        <h1>Space Traveler&#39;s Hub</h1>
      </div>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Rockets
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/missions">
            Missions
          </Link>
        </li>
        <hr className="missions-break" />
        <li>
          <Link className="nav-link" to="/myprofile">
            My Profile
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
