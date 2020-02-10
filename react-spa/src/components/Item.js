import React from 'react';
import ItemDetail from './ItemDetail';


function Item(props){
  let itemSrc="detail/" + props.item.id
  return(
    <>
   
 
     <li key={props.item.id}> 
     <p>{props.item.name}</p>
     <button onClick={() => props.onDelete(props.item)}>Delete</button>
     </li>
    </>
  ) 
}
export default Item;


