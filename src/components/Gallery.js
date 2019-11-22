import React, { useState } from 'react'
import Items from './Items'
import Item from './Item'
import { useParams } from 'react-router-dom'


const Gallery = (props) => {
    let { category } = useParams();
    if (category === 'artisan') {
        return (
            <div>
                <h1>Artisan Soaps</h1> 
                <Items 
                    items={['aspirations', 'black-raspberry-vanilla', 'black-tie',
                    'celestial-waters', 'cotton-fields', 'dragon\'s-blood',
                    'green-smoothie', 'heavenly-bouquet', 'mulberry']}
                    category={category}
                    location={props.location}/>
            </div>
        ) 
    } if (category === 'classic') {
        return (
            <div>
                <h1>Classic Soaps</h1> 
                <Items 
                    items={['northern-lights', 'oatmeal-almond-milk', 'oatmeal-almond-milk-honey',
                    'outdoors', 'peppermint-swirl', 'pumpkin-pie', 'summertime']}
                    category={category}
                    location = {props.location}/>
            </div>
        )
    }
}


export default Gallery