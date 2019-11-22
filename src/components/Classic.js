import React, { useState } from 'react'
import Items from './Items'
import Item from './Item'
import { Switch, Route, useRouteMatch } from 'react-router-dom'


const Classic = (props) => {
    const [selected, isSelected] = useState('')
    let { url } = useRouteMatch();
    if (selected === '') {
        return (
            <div>
                <h1>Classic Soaps</h1> 
                <Items 
                    items={['northern-lights', 'oatmeal-almond-milk', 'oatmeal-almond-milk-honey',
                    'outdoors', 'peppermint-swirl', 'pumpkin-pie', 'summertime']}
                    category='classic'
                    location = {props.location}
                    isSelected={isSelected}/>
            </div>
        ) 
    } else {
        return (
            <div>
                <h1>Classic Soaps</h1> 
                <Item 
                    item={selected}
                    isSelected={isSelected}/>
                <Switch>
                    <Route path={url+"/:item"} />
                </Switch>
            </div>
        )
    }
}
export default Classic