import React, {Component} from 'react';
import Scroll from 'react-scroll';
let scroll = Scroll.animateScroll;
let scrollTo = Scroll.scrollTo;

class SellerProfile extends Component {
  render() {
    return (
      <div>
        <div className="intro-container">
          <div>
            <h1 className="seller-title">Instant-gram</h1>
              <div><span>Last active: Today</span> <img id="green-status-dot" src="/static/images/status.png"></img></div>
              <div>
                Member Since: 2015
              </div>
              <div>
                Ships from: California
              </div>
              <div>
                Ships To: Worldwide
              </div>
              <div id="approval-rating">
                96% positive feedback
                <br></br>
                rate for prev. 6 months
              </div>
              <figure id="store-rating">
                <img alt="rate" height="18" src="/static/images/yellow5.png" width="85"></img><a id="reviews">(620)</a>
                <figcaption className="caption-right">
                </figcaption>
              </figure>
          </div>
          <div>
            <div>
              <h2>About</h2>
                <p id="about-text">Highest quality provider of weed, stimulants and perscriptions. Ranked #4 on Silk Road since 2015
                <br></br><a id="see-more-about">See more</a>
                <img src="/static/images/rank.png" width="27"></img>
                </p>
            </div>
          </div>
          <div>
            <h3>Connect</h3>
            <figure>
              <img alt="message" height="33" src="/static/images/message.png" width="42"></img>
              <figcaption>
                Message Instant-gram
                <div id="PGP">
                  PGP Verified
                </div>
              </figcaption>
            </figure>
            <figure>
              <img alt="favorite" height="37" src="/static/images/heart.png" width="45"></img>
              <figcaption>
                  Favorited by <a>345</a> users
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
export default SellerProfile;

$(document).ready(
  () => {
        $("#reviews").click(function() {
            scroll.scrollTo(2000)
        });
        $("#see-more-about").click(function() {
            scroll.scrollTo(1810)
        });
    });
