import React from 'react'
import { connect } from 'react-redux'
import { toggleVisibility } from '../redux/actions'
import Basket from './Basket'

const iconStyle = {
    fontSize: '48px',
    position: 'fixed',
    right: '0',
    top: '0',
    zIndex: '2',
    cursor: 'pointer'
}

const ShoppingCart = (props) => {
    return (
        <div>
            <a onClick={props.toggleVisibility}>
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

const mapDispatchToProps = dispatch => {
    return {
        toggleVisibility: () => dispatch({ type: 'TOGGLE_VISIBILITY' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)