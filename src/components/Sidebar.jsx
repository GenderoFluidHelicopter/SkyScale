import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SideBar.css";

export default function SideBar() {
    return <div className='navPanel'>
        <NavLink className="barButton" to="/intro" activeClassName="active">
          <p>SkyScale</p>
        </NavLink>
        <NavLink className="barButton" to="/api" activeClassName="active">
          <p>API</p>
        </NavLink>
      </div>;
}