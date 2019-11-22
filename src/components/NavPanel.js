import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavPanel = (props) => {
  return (
  <div>
  <h1>Serenity in Soap</h1>
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