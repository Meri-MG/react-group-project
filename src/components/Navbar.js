import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';
import classes from './Navbar.module.css';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <div className={classes.logo}>
        <img src={planet} alt="id" width="40px" height="40px" />
        <h1>Space Traveler&#39;s Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/dragons">
            Dragons
          </NavLink>
        </li>
        <hr className="missions-break" />
        <li>
          <NavLink className="nav-link" to="/myprofile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
