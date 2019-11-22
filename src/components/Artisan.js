import React, { useState } from 'react'
import Items from './Items'
import Item from './Item'
import { Switch, Route, useRouteMatch } from 'react-router-dom'


const Artisan = (props) => {
    const [selected, isSelected] = useState('')
    let { url } = useRouteMatch();
    if (selected === '') {
        return (
            <div>
                <h1>Artisan Soaps</h1> 
                <Items 
                    items={['aspirations', 'black-raspberry-vanilla', 'black-tie',
                    'celestial-waters', 'cotton-fields', 'dragon\'s-blood',
                    'green-smoothie', 'heavenly-bouquet', 'mulberry']}
                    category='artisan'
                    location={props.location}
                    isSelected={isSelected}/>
            </div>
        ) 
    } else {
        return (
            <div>
                <h1>Artisan Soaps</h1> 
                <Item 
                    item={selected}
                    isSelected={isSelected}
                    category='artisan'
                    location={props.location}/>
                <Switch>
                    <Route path={url+"/:item"} />
                </Switch>
            </div>
        )
    }
}


export default Artisan