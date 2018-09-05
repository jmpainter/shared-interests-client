import React from 'react';
import './EditInterests.js';
import DeleteInterest from './DeleteInterest';

export default function EditInterests(props) {
  const editInterests = props.list.map((interest, index) => (
    <DeleteInterest id={ interest.id } name={ interest.name } />
  ))
  return (
    <ul className="edit-interests">
      { editInterests }
    </ul>
  )
}