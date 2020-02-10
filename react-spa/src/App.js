import React from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import ItemsList from './components/ItemsList';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemsList: []
    }
    this.createItemHandler = this.createItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }

  // import data from json
async componentDidMount(){
  const response = await axios.get("/data/ItemsList.json");

  this.setState({
    itemsList: response.data
  })

}
  
 createItemHandler(item){
    this.setState({
     itemsList: this.state.itemsList.concat(item)
   })
 }

 deleteItemHandler(itemToDelete){
 
    let newItemsList = this.state.itemsList.filter(item => item.name !== itemToDelete.name)
    
    this.setState({
      itemsList: newItemsList
    })
  }

  
  render() {
    return (
      <div className="App">
        <Header greeting = "Welcome" count = {this.state.itemsList.length}/>
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
                <ItemsList itemsList={this.state.itemsList} count = {this.state.itemsList.length} onCreated={this.createItemHandler} onDelete={this.deleteItemHandler} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </nav>
        </Router>
  
      <Footer />
      </div>
    )
  }
 }
  

export default App;
