import React from 'react'
import NavLink from 'react-router-dom'

const NavPanel = () => (
        <NavLink 
            to="/artisan" 
            activeStyle={{
                fontWeight: "bold",
                color: "blue"
            }}>
          Artisan
        </NavLink>
)

export default NavPanel