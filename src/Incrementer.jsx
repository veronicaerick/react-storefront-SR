import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

var Incrementer = React.createClass({
  getInitialState: function() {
    return {
      counter: 1
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  
  decrement: function(){
    if (this.state.counter > 1)  {
      this.setState({
        counter: this.state.counter - 1
      })
    } 
  },

  render: function() {
    return <div className="product-quantity">
        <div id="controls">
          <button className="qty-picker" onClick = {this.decrement}> - </button>
            <div className="qty-picker" id="counter">{this.state.counter}</div>  
          <button className="qty-picker" onClick = {this.increment}> + </button> 
        </div>
     </div>
  }
});


export default Incrementer;