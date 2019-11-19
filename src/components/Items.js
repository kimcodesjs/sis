import React from 'react'

const Items = (props) => {
    //let { path, url } = useRouteMatch();
     const itemImgList = props.items.map(item =>
         <li key={item}>
 
                 <img src={window.location.origin + '/img/'+props.category+'/'+item+'.jpeg'} />
             
         </li>
         )
         return (
             <ul>{itemImgList}</ul>
         )
     
}

export default Items