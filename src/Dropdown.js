import React, { Component } from 'react';


class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = {isOpenid:false};
  }
  toggleState(){
    this.setState({isOpenid:!this.state.isOpenid});
  }
  render(){
    let dropdown;
    console.log(this.state.isOpenid);
    if(this.state.isOpenid)
    {
      dropdown = <div>here block</div>;
    }
    return <div onClick={this.toggleState.bind(this)}>its my dropDown baby{dropdown}</div>;
  }
}

export default Dropdown;
