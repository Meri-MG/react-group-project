import React from 'react';
import { Link } from 'react-router-dom';
import planet from './planet.png';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <img src={planet} alt="id" width="40px" height="40px" />
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
