import React, { useState } from 'react'
import Item from './Item'
import { Link, useRouteMatch, useParams, Switch, Route, withRouter } from 'react-router-dom'

const Items = (props) => {
    let { path, url } = useRouteMatch();
    const [selected, isSelected] = useState('')

    const itemImgList = props.items.map(item =>
        <li key={item}>
            <Link 
                to={url+'/'+item}
                onClick={() => isSelected(item)}>
                <img src={window.location.origin + '/img/'+props.category+'/'+item+'.jpeg'} />
            </Link>
        </li>
        )
    
    return (
        <div>
        {
            selected==='' ? (
                <div>
                    <ul>{itemImgList}</ul>
                </div>
            ) 
            : (
                <div>
                <Item item={selected}/>
                <Switch>
                        <Route path={path+"/:item"} component={Item} />
                </Switch>
                </div>
            )
        }
        </div>
        )
     
}


export default Items