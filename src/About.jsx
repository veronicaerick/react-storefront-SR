import React, {Component} from 'react';
import { Button } from 'react-bootstrap'; 

class About extends Component {
  render() {
    return (
      <div>
        <div className="section-container">
          <h1 className="section-title">About</h1>
          <div className="section-content">
            <p>Established in 2015 in California, Instant-gram provides customers with an unmatched medical grade marijuana, stimulants and over the counter perscriptions products. Close attention is paid to product cleanliness, quality, curing and processing. All products are in house and third party tested. Shipping is guarenteed in under 5 days and packing is always discreet. Ranked #4 on Silk Road.</p>
            <hr className="long-divider"></hr>
          </div>
        </div>
        <div>
          <div className="section-container">
            <div className="section-title" id="review-header">
              <span>Reviews</span>
              <div id="approval">
                1010 sales <br></br> 620 reviews 96% (+) rating
              </div>
            </div>
            <div className="section-content">
              <div className="rating">
                <img alt="stars" className="star-rating" src="/static/images/yellow5.png" width="100"></img><span>by <a>Mr. Nice Guy</a></span>
                <div className="verified-purchase">
                  <figure>
                    <img alt="verified" src="/static/images/verified_check.png" width="34"></img>
                    <figcaption className="caption-right">
                      verified purchase - 3/6/2017
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p>Incredibly fast shipping and discrete packaging. Everything got here earlier than expected and undamaged or unopened. Will buy from Instantgram again 100%.</p>
              <hr className="short-divider"></hr>
              <div className="rating">
                <img alt="stars" className="star-rating" src="/static/images/yellow5.png" width="100"></img><span>by <a>Scarface</a></span>
                <div className="verified-purchase">
                  <figure>
                    <img alt="verified" src="/static/images/verified_check.png" width="34"></img>
                    <figcaption className="caption-right">
                      verified purchase - 3/6/2017
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p>Transit within 1 hour of placing order. Very fast processing time. Seller was friendly and very willing to answer my questions and provide information about the manufacturing and processing of everything I ordered. Would not hesitate to order again!</p>
              <hr className="short-divider"></hr>
              <div className="rating">
                <img alt="stars" className="star-rating" src="/static/images/yellow4.png" width="100"></img><span>by <a>GreenThumb</a></span>
                <div className="verified-purchase">
                  <figure>
                    <img alt ="verified" src="/static/images/verified_check.png" width="34"></img>
                    <figcaption className="caption-right">
                      verified purchase - 3/5/2017
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p>Amazing potency. I deducted a star because the packaging was so tight that the product was flattened. Otherwise very happy, fast shipping and good value.</p>
              <hr className="short-divider"></hr>
              <div className="rating">
                <img alt="stars" className="star-rating" src="/static/images/yellow5.png" width="100"></img><span>by <a>Magic City Hippie</a></span>
                <div className="verified-purchase">
                  <figure>
                    <img alt="verified" src="/static/images/verified_check.png" width="34"></img>
                    <figcaption className="caption-right">
                      verified purchase - 3/2/2017
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p>Discounts are incredible, highly recommend the specials. Items arrived quickly and as described.</p>
              <hr className="short-divider"></hr>
              <div className="rating">
                <img alt="stars" className="star-rating" src="/static/images/yellow5.png" width="100"></img><span>by <a>One Hit Wonder</a></span>
                <div className="verified-purchase">
                  <figure>
                    <img alt="verified" src="/static/images/verified_check.png" width="34"></img>
                    <figcaption className="caption-right">
                      verified purchase - 3/1/2017
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p>Fast communication back from seller, answered all of my questions. Product quality is great. I officially recommend this seller.</p>
              <div id="see-more-btn">
                <button id="status" value="True"><span>See All Reviews</span></button>
              </div>
              <hr className="long-divider"></hr>
            </div>
          </div>
        </div>
        <div>
          <div className="section-container">
            <h1 className="section-title">Policies</h1>
            <div className="section-content">
              <p>Due to the nature of our products, we cannot accept cancellations or changes to orders after we shipped your order. Please double check colors and sizing BEFORE placing your final order as we are not responsible for change requests afterwards. For returns, you must have your tracking information and the product must be unused. We currently accept bitcoin. If you need assistance with configuring a bitcoin account and purchase, please click here: <a href="https://bitcoin.org/en/getting-started"><img alt="bitcoin" src="/static/images/bitcoin_logo.png" width="100"></img></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;