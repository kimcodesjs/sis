import React from 'react'
import { Link, useRouteMatch, useParams, Switch, Route, withRouter } from 'react-router-dom'

const Items = (props) => {
    let { url } = useRouteMatch();
    
    {console.log(props.location)}
    const itemImgList = props.items.map(item =>
        <li key={item}>
            <Link 
                to={url+'/'+item}
                onClick={() => props.isSelected(item)}>
                <img src={window.location.origin + '/img/'+props.category+'/'+item+'.jpeg'} />
            </Link>
        </li>
        )
    return <ul>{itemImgList}</ul>
}

export default Items