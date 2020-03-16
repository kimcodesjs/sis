import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
const imgStyle = {
  width: '40%',
  leftMargin: '10px'
} 
const navStyle = {
  border: '3px solid #ffeda3'
}
const NavPanel = (props) => {
  return (
  <div style={navStyle}>
    <img src={window.location.origin + '/img/large logo PNG - final.png'} 
        style={imgStyle}/>
    <ul>
        <li>
          <Link 
            to='/artisan'>
            Artisan Soaps
          </Link>
        </li>
        <li>
          <Link 
            to='/classic'>
            Classic Soaps
          </Link>
        </li>
        <li>
          <Link 
            to="/">
            Home
          </Link>
        </li>
    </ul>
  </div>
  )
}

export default withRouter(NavPanel)