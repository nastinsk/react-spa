import React from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import ItemDetail from './ItemDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ItemsList extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
    <> 
    <Router>
    <h1>This is Cart page</h1>
    <p>You have {this.props.count} items in your cart</p>
     <ul>
       {this.props.itemsList.map(item => <><Item item ={item} onDelete={this.props.onDelete}/> <Link to = {`/items/${item.id}`}>Detail</Link>
      
      <Switch>
        <Route path={`/items/${item.id}/`}>
          <ItemDetail item = {item}/>
        </Route>
      </Switch>
    
       </>)}
     </ul>
    
    <ItemForm onCreated={this.props.onCreated}/>
    </Router>
    </>
    )
  }
}

export default ItemsList;