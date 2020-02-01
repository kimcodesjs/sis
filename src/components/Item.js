import React, { useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import artisanItems from '../data/Artisan'
import ScrollToTopOnMount from './ScrollToTopOnMount'

const imgStyle = {
    width: '40%'
}

const Item = () => {
    let category = useParams().category
    if (category === 'artisan') {
        const item = artisanItems.find(item => item.img === useParams().item)
        return (
            <div>
            <ScrollToTopOnMount />
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h3>${item.price}.00</h3>
            <img style={imgStyle} src={window.location.origin + '/img/'+category+'/'+item.img+'.jpeg'} />
            </div>
        )
    }
    
}

export default withRouter(Item)