import React, { useEffect } from 'react'
import Items from './Items'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'


const Gallery = (props) => {
    
    let collection = useParams().collection;
    
    useEffect(() => {
        props.updateCollection(collection)
    })
    return (
        <div>
            <h1>{collection}</h1> 
            <Items 
                collection={collection}
                location={props.location}/>
        </div>
    ) 
}
const mapDispatchToProps = dispatch => {
    return {
        updateCollection: (collection) => dispatch({ type: 'UPDATE_COLLECTION', collection })
    }
}

export default connect(null, mapDispatchToProps)(Gallery)