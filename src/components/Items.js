import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
const imgStyle = {
    width: '60%'
}  
const Items = (props) => {
    let { url } = useRouteMatch();
    
    const itemImgList = props.items.map(item =>
        <li key={item}>
            <Link 
                to={url+'/'+item}>
                <img style={imgStyle} src={window.location.origin + '/img/'+props.category+'/'+item+'.jpeg'} />
            </Link>
        </li>
        )
    return <ul>{itemImgList}</ul>
}

export default Items