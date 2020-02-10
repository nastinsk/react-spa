import React from 'react';
import ItemsList from './ItemsList';
import About from './About';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Nav extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/items">Items</Link>
              </li>
            </ul>
    
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/items">
                <ItemsList itemsList={this.props.itemsList} count = {this.props.itemsList.length} onCreated={this.props.onCreated} onDelete={this.props.onDelete} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </nav>
        </Router>
    )
  }
}

export default Nav;
