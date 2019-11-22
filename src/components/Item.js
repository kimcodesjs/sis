import React, { useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import artisanItems from '../data/Artisan'


const Item = (props) => {
    let category = useParams().category
    if (category === 'artisan') {
        const item = artisanItems.find(item => item.title === useParams().item)
        return (
            <div>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <img src={window.location.origin + '/img/'+category+'/'+item.title+'.jpeg'} />
            </div>
        )
    }
    
}

export default withRouter(Item)