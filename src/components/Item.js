import React from 'react'
import { useParams, withRouter } from 'react-router-dom'

const Item = () => {
    let { item } = useParams()
    return (
        <div>
            <h1>{item}</h1>
        </div>
    )
}

export default withRouter(Item)