import React, { useState } from 'react'

const iconStyle = {
    fontSize: '48px',
    position: 'fixed',
    right: '0',
    top: '0',
    zIndex: '2',
    cursor: 'pointer'
}

const ShoppingCart = (props) => {
    const [toggle, isToggled] = useState(true)
    
    const cartContent = () => {
        toggle ? isToggled(false) : isToggled(true)
        
    }
    return (
        <a onClick={cartContent}>
            <ion-icon style={iconStyle} name="cart"></ion-icon>
        </a>
    )
}

export default ShoppingCart