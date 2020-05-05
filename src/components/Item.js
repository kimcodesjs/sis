import React from 'react'
import { compose } from 'redux'
import { connect }from 'react-redux'
import { useParams } from 'react-router-dom'
import ScrollToTopOnMount from './ScrollToTopOnMount'
import { firestoreConnect } from 'react-redux-firebase'

const imgStyle = {
    width: '40%'
}
// next: import item data from firestore
const Item = (props) => {
    let collection = useParams().collection
    let param = useParams().item
    let item = {};
    if (collection === 'Tier 1') {
                                                        ///[{doc: blahblah}]
        item = props.T1.find((doc) => {
            return doc.img === param
            // if (doc.img === param) {
            //     return doc
            //}
        }) // switch to map?
        // console.log(item)
    } else if (collection === 'Tier 2') {
        item = props.T2.map((doc) => {
            if (doc.img === param) {
                return doc
            }
        })
    }
    //item = item.find((item) => item !== undefined)
    //console.log(item)
    return (
        <div>
        <ScrollToTopOnMount />
         <h2>{item.id}</h2>
         <h3>{item.description}</h3>
        <h3>${item.price}.00</h3>
        <h3>{item.stock}</h3>
        <button onClick={e => {
            e.preventDefault()
            props.addToCart(item.id)}}
        >Add To Cart</button>
        <img style={imgStyle} src={window.location.origin + '/img/'+collection+'/'+item.img+'.jpeg'} />
        </div>
        
    )
    
}
const mapStateToProps = state => {
    return {
        item: state.view.item,
        T1: state.firestore.ordered.tier1 ? state.firestore.ordered.tier1: [],
        T2: state.firestore.ordered.tier2 ? state.firestore.ordered.tier2: []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch({ type: 'ADD_TO_CART', id: item })
    }
}
export default compose(
    firestoreConnect(() => ['tier1', 'tier2']),
    connect(mapStateToProps, mapDispatchToProps)
)(Item)