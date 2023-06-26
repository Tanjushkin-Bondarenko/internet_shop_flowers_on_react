import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

export const Sidebar = ()=> {
  return (
      <div className='sidebar'>
          <ul>
              <li><NavLink to="/flowers">Flowers</NavLink></li>
              <li><NavLink to="/article">Article</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
      
    </div>
  )
}
