import React from 'react'
import Items from './Items'

const Classic = () => (
    <div>
        <h1>Classic Soaps</h1>
        <Items
            items={['northern-lights', 'oatmeal-almond-milk', 'oatmeal-almond-milk-honey',
                    'outdoors', 'peppermint-swirl', 'pumpkin-pie', 'summertime']}
            category='classic'/>      
    </div>
)

export default Classic