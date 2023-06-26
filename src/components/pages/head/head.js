import React from 'react';
import './head.css';
import { Link } from "react-router-dom";

export const Head = () => {
  return (
      <div className='heder-container'>
      <Link to="/">
      <div className='name'>
          <h1>Flower shop</h1>
          <h4>Best flower shop in your city</h4>
          </div>
          <div className='time'>
              <p>we work every day</p>
              <p>8:00 - 20:00</p>
      </div>
      </Link>
    </div>
  )
}
