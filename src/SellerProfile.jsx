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
                <br></br><a id="see-more-about">See more</a><br></br>
                <img src="/static/images/rank.png" width="27"></img>
                </p>
            </div>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="center">
            <button className="store-btn">
              <span id="span">Message Request </span>
              <i className="fa fa-envelope fa-lg replace"></i>
              <i className="fa fa-envelope envelope fa-lg hidden"></i>
            </button>
          </div>
           <small>PGP Verified</small>
            <button className="store-btn-like" id="like">
              <span id="span-like">Favorite Instant-gram </span>
              <i className="fa fa-heart-o fa-lg replace-heart"></i>
              <i className="fa fa-heart-o heart fa-lg hidden-heart"></i>
            </button>
          <small><a>(367) </a>users like Instant-gram</small>
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

$(document).ready(
  () => {
  $('.store-btn').on( "click", function() {
    $('.envelope').addClass('fly');    
    $('.hidden').addClass('visible');
    $('.replace').removeClass('fa-envelope').addClass('fa-check');
    document.getElementById('span').innerHTML = 'Request Sent';
    $(this).addClass('done');
  });
});

$(document).ready(
  () => {
  $('.store-btn-like').on( "click", function() {
    $('.heart').addClass('fly');    
    $('.hidden-heart').addClass('visible');
    $('.replace-heart').removeClass('fa-heart-o').addClass('fa-heart');
    document.getElementById('span-like').innerHTML = 'Favorited Instant-gram';
    $(this).addClass('done');
  });
});


