import React, {Component} from 'react';

class Store extends Component {
  render() {
    return (
    <div>
      <div className="store-container">
          <h1 className="store-title">Instant-gram</h1>
            <img id="logo" className="store-image" src="https://image.ibb.co/nvqWqa/weed.png"></img>
          </div>    </div>
    );
  }
}
export default Store;
function change_image() {
    let logo = document.getElementById('logo').src;
    (logo == 'https://image.ibb.co/nvqWqa/weed.png') ?
        (document.getElementById('logo').src = 'https://image.ibb.co/krcpbF/bag.png'):
        (document.getElementById('logo').src = 'https://image.ibb.co/nvqWqa/weed.png')
    }


setInterval(change_image, 3500);