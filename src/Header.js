import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Header extends Component {
  
  static propTypes={
    items: PropTypes.array
  }
  render(){
    console.log(React.PropTypes);
    return (
    <div>
      {this.props.ites.map((item,index) => <a href={item.link} key={index}>{item.label}</a>)}
    </div>
    );
  }
}
export default Header;
