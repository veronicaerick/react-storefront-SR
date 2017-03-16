import React, {Component} from 'react';
import Store from './Store.jsx';
import SellerProfile from './SellerProfile.jsx';
import Specialties from './Specialties.jsx';
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Products from './Products.jsx';

let urls = [
  { id: 1, url:'/static/images/green-code.png'},
  { id: 2, url:'/static/images/red-code.png'},
  { id: 3, url:'/static/images/blue-code4.png'},
  { id: 4, url:'/static/images/blue-code3.png'},
  { id: 5, url:'/static/images/green-code1.png'},
  { id: 6, url:'/static/images/blue-code5.png'},
  { id: 7, url:'/static/images/red-code1.png'},
  { id: 8, url:'/static/images/green-code6.png'}
];

let urlsSp = [
  { id: 1, url:'/static/images/green-code4.png'},
  { id: 2, url:'/static/images/green-code2.png'},
  { id: 3, url:'/static/images/blue-code.png'},
  { id: 4, url:'/static/images/green-code5.png'}
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Store />
        <SellerProfile />
        <Specialties imageUrls={urlsSp}/>
        <Products imageUrls={urls}/>
        <About />
      </div>
    );
  }
}
export default App;
