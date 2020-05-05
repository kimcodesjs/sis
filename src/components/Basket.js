import React from 'react'
import { connect } from 'react-redux'

const Basket = (props) => {
    let listStyle = {
        fontSize: '24px',
        position: 'fixed',
        right: '0',
        top: '30px',
        zIndex: '3',
        align: 'left',
        opacity: '1',
        transition: 'opacity 1s'
    }
    if (props.visibility) {
        listStyle.opacity = '1'
    } else {
        listStyle.opacity = '0'
    }
    
    const basket = props.basket.map(item =>
        <li key={item}>
            {item} 
            <a onClick={ e => { 
                e.preventDefault()
                props.removeFromCart(item)}}>
                <ion-icon name="close-circle-outline"></ion-icon>
            </a>
        </li>
        )
    return <ul style={listStyle}>{basket}</ul>
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (item) => dispatch({ type: 'REMOVE_FROM_CART', id: item })
    }
}
const mapStateToProps = state => {  
    return {
        basket: state.cart.basket,
        visibility: state.cart.cartVisibility
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)