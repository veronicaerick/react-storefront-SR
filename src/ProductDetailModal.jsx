import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Incrementer from './Incrementer.jsx'

const ProductDetailModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" className="modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
          <div><img src='/static/images/green-modal.png' width="355" height="340"></img>
          </div>
          <div className="modal-text">
            <h2>Sour Diesel</h2>
              <h4>$20/gram </h4>
                <img src="/static/images/yellow5.png" width="100"></img><br></br>
                <a>(See 55 Reviews)</a>
                <hr className="short-divider"></hr>
                <p>
                  Invigorating, uplifting, and highly energetic, Sour Diesel is renowned for its soaring euphoria. Stress and pain fade away in long-lasting relief.
                </p>
              <Incrementer />
              <Button className="add-cart-btn" onClick={this.props.onHide}>Add to Cart</Button>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    );
  }
});

export default ProductDetailModal;