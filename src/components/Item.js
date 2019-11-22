import React, { useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'

const Item = (props) => {
    return (
        <div>
            <h1>{props.item}</h1>
            <img src={window.location.origin + '/img/'+props.category+'/'+props.item+'.jpeg'} />
            {console.log(props.location)}
        </div>
    )
}

export default withRouter(Item)