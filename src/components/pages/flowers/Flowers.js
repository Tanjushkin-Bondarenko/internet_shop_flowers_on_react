import React from 'react'
import { Link } from "react-router-dom";
import './flower.css';

export const Flowers = () => {
    return (
      <div className='flowers'>
            <ul>
                <h3>Flowers</h3>
           <li><Link to="/flowers/chrysanthemum">Chrysanthemum</Link></li>
          <li><Link to="/flowers/gerberas">Gerberas</Link></li>
          <li><Link to="/flowers/hydrangea">Gidrangea</Link></li>
          <li><Link to="/flowers/lavander">Lavander</Link></li>
          <li><Link to="/flowers/lily">Lily</Link></li>
          <li><Link to="/flowers/peony">Peony</Link></li>
          <li><Link to="/flowers/rose">Rose</Link></li>
            </ul>
    </div>
  )
}
