import React from 'react';
  

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue:'' 
    };
    this.createItem = this.createItem.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

  
  }

  createItem(event){
    event.preventDefault();
    this.props.onCreated({name: this.state.formValue})
    this.setState({
      formValue: ''
    })

  }
  changeHandler(event){
    this.setState({
      formValue: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.createItem}>
        <fieldset>
          <legend>Enter product name</legend>
          <input value = {this.state.formValue} placeholder =" " type="text" onChange={this.changeHandler}/>
          <button>Submit</button>
        </fieldset>
      </form>
    );
  }
}
export default ItemForm;