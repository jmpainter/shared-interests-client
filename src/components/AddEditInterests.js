import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class AddEditInterests extends React.Component {

  doneEditing() {
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
                <button onClick={() => this.doneEditing()}>Done</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AddEditInterests.defaultProps = {
  interests: []
}

const mapStateToProps = state => ({
  interests: state.user.interests
});

export default connect(mapStateToProps)(AddEditInterests);