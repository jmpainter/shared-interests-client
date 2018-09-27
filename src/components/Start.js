import React from 'react';
import './Start.css';
import InterestsList from './InterestsList';
import { getLatestInterests } from '../actions/intererests';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Start extends React.Component {

  componentDidMount() {
    this.props.dispatch(getLatestInterests());
  }

  render() {
    return (
      <div className="start">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="splash">
                  <img src={require('../images/handshake.png')} alt="Handshake" />
                  <h1>Shared Interests</h1>
                  <h2>Where you can share your interests and connect with others</h2>
                </div>
              </div>            
            </div>
          </div>
        </section>
        
        <section className="section-background">
          <div className="container steps">
            <div className="row">
              <div className="col-4">
                <div className="blurb">
                  <h3>1. Create a list of your interests.</h3>
                  <p>Pull your list of interests from Wikipedia’s huge list.
                    Make your list as long and as specific as you want</p>
                  </div>
                </div>            
              <div className="col-4">
                <div className="blurb">
                  <h3>2. Find other members.</h3>
                  <p>Meet someone nearby with a shared set of interests or who enjoys your favorite pastime.
                    Connect with others who share that obscure interest of yours or who’s hobbies you find fascinating.</p>
                </div>
              </div>            
              <div className="col-4">
                <div className="blurb">
                  <h3>3. Have a conversation!</h3>
                  <p>Conversations are message based and can remain anonymous. Block another member at any time.</p>
                </div>
              </div>            
            </div>
          </div>
        </section>

        <section>
          <div className="container start">
            <div className="row">
              <div className="col-12">
                <Link to="/register"><button className="button special">Get Started!</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-background">
          <div className="container latest">
            <div className="row">
              <div className="col-12">
                <div className="blurb">
                  <h3>Latest on Shared Interests</h3>
                  <InterestsList list={ this.props.interestsList } />
                </div>
              </div>
            </div>
          </div>
        </section>      
      </div>
    );
  }
}

Start.defaultProps = {
  interestsList: []
};

export const mapStateToProps = state => ({
  interestsList: state.interests.latestInterests
});

export default connect(mapStateToProps)(Start);
