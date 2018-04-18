import React, { Component } from 'react';


class RegistationForm extends Component {
  constructor(props){
    super(props);
    this.state = {email:''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log('form is submitted');

  }
  handleEmailChange(event){
    console.log('email was cahge',this)
    this.setState({email:event.target.value});
  }
  /* toggleState(){
    this.setState({isOpenid:!this.state.isOpenid});
  } */
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        
        <button>save</button>
        
      </form>
    )}
}

export default RegistationForm;
