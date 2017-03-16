import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import ProductDetailModal from './ProductDetailModal.jsx';

const Products = React.createClass ({
  getInitialState() {
    return { lgShow: false };
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
          <div className="products-header">
            <h2>Products</h2>
            <div className="item-toolbar">
              <div>
                <div className="search-products">
                  search products <i aria-hidden="true" className="fa fa-search"></i>
                </div>
                <div className="search-products" id="sort-by">
                  sort-by <a><img src="/static/images/sort-by-icons.png" width="140"></img></a>
                </div>
              </div>
            </div>
          </div>
          <div className="products" onClick={()=>this.setState({ lgShow: true })}>
                {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
          </div>
          <div className="more-products">
              <div className="products" onClick={()=>this.setState({ lgShow: true })}>
              {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
          </div>
          </div>
          <div id="see-more-btn">
            <Button value="True" id="status"><span>Show all products</span></Button>
          </div>      
          <ProductDetailModal show={this.state.lgShow} onHide={lgClose} />
        </div>
    );
  }
});


export default Products;

// show more/less products
$(document).ready(
    () => {
        $("#status").click(function() {
            $(".more-products").toggle();
            ($(this).text() === 'Show all products') ? ($(this).text('Show less')) :  ($(this).text('Show all products'))
        });
      });

