import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
 
  // constructor(props) {
  //   super(props);
  // }

  // toggleNav() {
  //   const nav = $('.nav-links');
  //   if (nav.attr('class') === 'nav-links'){
  //     nav.attr('class', 'nav-links responsive');
  //   } else {
  //     nav.attr('class', 'nav-links');
  //   }
  // }
  render() {
    return  (
    <header role="banner" className="top-nav">
      <div className="container header">
        <div className="row">
          <div className="col-12">
            <Link to="/"><img src="/images/logo.png" className="logo" alt="Shared Interests logo" /><span className="logo-type">Shared Interests</span></Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li className="icon">
                <a className="menu-link user-link public-link" >&#8801;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    );
  }
}