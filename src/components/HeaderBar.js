import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleMainMenu } from '../actions/misc';

export class HeaderBar extends React.Component {
 
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
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  toggleMenu() {
    this.props.dispatch(toggleMainMenu());
  }

  render() {
    let userLinks;
    if(this.props.loggedIn) {
      userLinks = (
        <span>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><a className="logout-link" onClick={() => this.logOut()}>Log Out</a></li>
        </span>
      );
    } else {
      userLinks = (
        <span>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </span>
      );
    }
    let navLinksClassName = 'nav-links';
    console.log('this.props.mainMenuOpen: ' + this.props.mainMenuOpen);
    if(this.props.mainMenuOpen) {
      navLinksClassName += ' responsive';
    }

    return  (
    <header role="banner" className="top-nav">
      <div className="container header">
        <div className="row">
          <div className="col-12">
              <Link to='/'><img src={require('../images/logo.png')} className="logo" alt="Shared Interests logo" /><span className="logo-type">Shared Interests</span></Link>
            <nav>
              <ul className={navLinksClassName}>
                { userLinks }
              </ul>
            </nav>
            <a className="toggleButton" onClick={() => this.toggleMenu()}>&#8801;</a>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

HeaderBar.defaultProps = {
  loggedIn: false,
  mainMenuOpen: false
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  mainMenuOpen: state.misc.mainMenuOpen
});

export default connect(mapStateToProps)(HeaderBar);