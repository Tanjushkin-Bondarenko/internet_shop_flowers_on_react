import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./flower.css";

export default function FlowerPage() {
    const flower = useLoaderData();
  return (
    <div>
         <Link className='back' to="/flowers">Back to catalog</Link>
      <div className='flower-page'>
          <img src={flower.img}></img>
          <h3>{ flower.name}</h3>
          <h4>Price: {flower.price}</h4>
          <p>flower heigth: {flower.height}</p>
          <p>Period flowering: {flower.flowering_period }</p>
      </div>
      </div>
  )
}
