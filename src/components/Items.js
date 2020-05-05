import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

const imgStyle = {
    width: '60%'
} 

const Items = (props) => {

    let { url } = useRouteMatch();
    let collection = useParams().collection
    let itemList = []
    if (collection === 'Tier 1') {
        itemList = props.T1.map((item) => {
          return (
            <li key={item.img}>
                <Link 
                    to={url+'/'+item.img}
                    onClick={e => {
                        props.updateActiveItem(item)}}>
                    <img style={imgStyle} src={window.location.origin + '/img/'+collection+'/'+item.img+'.jpeg'} />
                </Link>
            </li>
          )  
        })
    } else if (collection === 'Tier 2') {
        itemList = props.T2.map((item) => {
            return (
              <li key={item.img}>
                  <Link 
                      to={url+'/'+item.img}
                      onClick={e => {
                        props.updateActiveItem(item)}}>
                      <img style={imgStyle} src={window.location.origin + '/img/'+collection+'/'+item.img+'.jpeg'} />
                  </Link>
              </li>
            )  
        })
    }
  
    // why does this log twice?
    console.log(props.T1)
    return <ul>{itemList}</ul>
}

const mapStateToProps = state => {
    return {
        T1: state.firestore.ordered.tier1 ? state.firestore.ordered.tier1 : [],
        T2: state.firestore.ordered.tier2 ? state.firestore.ordered.tier2 : []
    }
}
// persist state thru page refresh?
const mapDispatchToProps = dispatch => {
    return {
        updateActiveItem: (item) => dispatch({ type: 'UPDATE_ACTIVE_ITEM', item})
    }
}

export default compose(
    firestoreConnect(() => ['tier1', 'tier2']),
    connect(mapStateToProps, mapDispatchToProps)
)(Items)