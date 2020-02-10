import React from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';



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
        <Header greeting = "Welcome" />
        <Nav itemsList = {this.state.itemsList} count = {this.state.itemsList.length} onCreated={this.createItemHandler} onDelete={this.deleteItemHandler}/>
        <Footer />
      </div>
    )
  }
 }
  

export default App;
