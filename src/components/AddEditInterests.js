import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';

export default function AddEditInterests(props) {
  return (
    <div className="add-edit-interests">
      <h1>My Interests</h1>
      <EditInterests />
      <AddInterest />
    </div>
  );
}