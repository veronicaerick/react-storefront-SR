import React, {Component} from 'react';

class Navbar extends Component {

  render() {
    return (
      <div>
        <ul className="nav">
        <img id="silk-road" src="/static/images/silk_road.png"></img>
          <li className="nav-item"><a href="#contact">messages: 0</a></li>
          <li className="nav-item"><a href="#orders">orders:0</a></li>
          <li className="nav-item"><a href="#account">account: $0</a></li>
          <a><img src="/static/images/cart.png" id="cart"></img></a>
        </ul>
      </div>
    ); 
  }
}

export default Navbar;