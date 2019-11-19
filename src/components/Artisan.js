import React from 'react'
import Items from './Items'
import useRouteMatch from 'react-router-dom'


const Artisan = () => {

return (
    <div>
        <h1>Artisan Soaps</h1> 
        <Items 
            items={['aspirations', 'black-raspberry-vanilla', 'black-tie',
                'celestial-waters', 'cotton-fields', 'dragon\'s-blood',
                'green-smoothie', 'heavenly-bouquet', 'mulberry']}
            category='artisan'/>
    </div>
)
}

export default Artisan