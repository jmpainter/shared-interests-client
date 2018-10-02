import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleMainMenu } from '../actions/misc';

export class HeaderBar extends React.Component {
 
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    if(this.props.mainMenuOpen) {
      this.props.dispatch(toggleMainMenu());
    }
  }

  toggleMenu() {
    this.props.dispatch(toggleMainMenu());
  }

  linkClick() {
    if(this.props.mainMenuOpen) {
      this.props.dispatch(toggleMainMenu());
    }
  }

  render() {
    let userLinks;
    if(this.props.loggedIn) {
      userLinks = (
        <span>
          <li><Link onClick={() => this.linkClick()} to="/">Home</Link></li>
          <li><Link onClick={() => this.linkClick()} to="/profile">Profile</Link></li>
          <li><a className="logout-link" onClick={() => this.logOut()}>Log Out</a></li>
        </span>
      );
    } else {
      userLinks = (
        <span>
          <li><Link onClick={() => this.linkClick()} to="/">Home</Link></li>
          <li><Link onClick={() => this.linkClick()} to="/register">Sign Up</Link></li>
          <li><Link onClick={() => this.linkClick()} to="/login">Log In</Link></li>
        </span>
      );
    }
    let navLinksClassName = 'nav-links';
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
            <a className="toggle-button" onClick={() => this.toggleMenu()}>&#8801;</a>
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