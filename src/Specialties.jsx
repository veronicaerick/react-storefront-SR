import React, {Component} from 'react';
import ProductDetailModal from './ProductDetailModal.jsx';
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;

const Specialties = React.createClass({
    getInitialState() {
    return { smShow: false, lgShow: false };
    },

    renderImage(imageUrl) {
      return (
        <div key={imageUrl.id}>
          <img src={imageUrl.url} />
        </div>
      );
    },

    render() {
    let lgClose = () => this.setState({ lgShow: false });
    
    return (
      <div className="gallery">
      <h2 className="products-header">Specials</h2>
        <div className="products" onClick={()=>this.setState({ lgShow: true })}>
            {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
          <ProductDetailModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    );
  }
});

export default Specialties;
