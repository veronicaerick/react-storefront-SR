import React, {Component} from 'react';
import { Tooltip, OverlayTrigger, Button, Popover, ButtonToolbar } from 'react-bootstrap'
import ProductDetailModal from './ProductDetailModal.jsx';

const popoverTop = (
  <Popover id="popover-positioned-top" title="Better browsing tip">
    <strong>Sort by type:</strong> Click on an icon to sort products by category.
  </Popover>
);

const Products = React.createClass ({
  getInitialState() {
    return { lgShow: false };
    },

   renderImage(imageUrl) {
      return (
        <div className="container" key={imageUrl.id}>
          <img className="overlay" src={imageUrl.url} />
              <span> see details<i className="fa fa-eye" aria-hidden="true"></i>
              </span>
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
                  sort-by <a>   
                  <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                    <img className="sort-icon float arrow" id="teach" src="/static/images/green.png" width="37"></img>
                  </OverlayTrigger>
                  <img className="sort-icon float" src="/static/images/pill.png" width="37"></img>
                  <img className="sort-icon float"src="/static/images/amph.png" width="37"></img></a>
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
            <Button className="button" value="True" id="status"><span>Show all products</span></Button>
          </div>      
          <ProductDetailModal show={this.state.lgShow} onHide={lgClose} />
        </div>
    );
  }
});


export default Products;

// show more/less products

// remove bounce animation after user has hovered
$(document).ready(
    () => {
        $("#status").click(function() {
            $(".more-products").toggle();
            ($(this).text() === 'Show all products') ? ($(this).text('Show less')) :  ($(this).text('Show all products'))
        });
        $("#teach").hover(function() {
            $(this).addClass('hover')
            $(this).removeClass('arrow');
        });

      });
