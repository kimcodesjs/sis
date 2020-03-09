import React from 'react'
import { connect } from 'react-redux'
import { toggleVisibility, removeFromCart } from '../redux/actions'
import Basket from './Basket'

const iconStyle = {
    fontSize: '48px',
    position: 'fixed',
    right: '0',
    top: '0',
    zIndex: '2',
    cursor: 'pointer'
}

// next: debug basket render
const ShoppingCart = ({ dispatch }, props) => {
    return (
        <div>
            <a onClick={e => {
                e.preventDefault()
                dispatch(toggleVisibility())}}>
                <ion-icon style={iconStyle} name="cart"></ion-icon>
            </a>
            <Basket />
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        visibility: state.cartVisibility
    }
}

export default connect(mapStateToProps)(ShoppingCart)