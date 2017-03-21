import React, {Component} from 'react';
import ProductDetailModal from './ProductDetailModal.jsx';
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;

const Specialties = React.createClass({
    getInitialState() {
    return { smShow: false, lgShow: false };
    },

    render() {
    let lgClose = () => this.setState({ lgShow: false });
    
    return (
      <div className="gallery">
      <h2 className="products-header">Specials</h2>
        <div className="products" onClick={()=>this.setState({ lgShow: true })}>
          <div className="container">
                <img className="overlay" src="/static/images/green-code4.png"></img>
                 <span>see details <i className="fa fa-eye" aria-hidden="true"></i>
                </span>
            </div>
            <div className="container">
                <img className="overlay" src="/static/images/green-code2.png"></img>
                 <span>see details <i className="fa fa-eye" aria-hidden="true"></i></span>
            </div>
            <div className="container">
                <img className="overlay-blue" src="/static/images/blue-code.png"></img>
                 <span className="blue-span">see details <i className="fa fa-eye" aria-hidden="true"></i></span>
            </div>
            <div className="container">
                <img className="overlay" src="/static/images/green-code5.png"></img>
                 <span>see details <i className="fa fa-eye" aria-hidden="true"></i></span>
            </div>
        </div>
          <ProductDetailModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    );
  }
});

export default Specialties;
