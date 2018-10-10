import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';
import { connect } from 'react-redux';
import requiresLogin from './RequiresLogin';

export class AddEditInterests extends React.Component {

  doneEditing() {
    // redirect to profile screen
    this.props.history.push('/profile');
  }
  render() {
    return (
      <section className="add-edit-interests"> 
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>My Interests</h1>
                <EditInterests list={ this.props.interests } />
                <p className="new-interest">New Interest:</p>
                <AddInterest />
                <button className="done-editing wide" onClick={() => this.doneEditing()}>Done</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  interests: state.user.interests
});

// connecting this component to requiresLogin will redirect unautheticated users
export default requiresLogin()(connect(mapStateToProps)(AddEditInterests));