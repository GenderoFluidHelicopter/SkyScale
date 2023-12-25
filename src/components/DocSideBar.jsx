import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./DocSideBar.css";

const Sidebar = () => {
return (
<div className='navPanel1'>
        <NavLink className="barButton1" to="/pscl" activeClassName="active">
          <p>Upscaling</p>
        </NavLink>
        <NavLink className="barButton1" to="/ntrp" activeClassName="active">
          <p>Interpolation</p>
        </NavLink>
        <NavLink className="barButton1" to="/trm" activeClassName="active">
          <p>Terms</p>
        </NavLink>
        <NavLink className="barButton1" to="/arts" activeClassName="active">
          <p>Articles</p>
        </NavLink>
        </div>
)}

export default Sidebar;