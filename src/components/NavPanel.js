import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavPanel = () => {
  
  return (
  <div>
    <ul>
          <li>
            <Link to="artisan">Artisan Soaps</Link>
          </li>
          <li>
            <Link to="/classic">Classic Soaps</Link>
          </li>
    </ul>
  </div>
  )
}

export default withRouter(NavPanel)