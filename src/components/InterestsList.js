import React from 'react';
import PropTypes from 'prop-types';

export default function InterestsList(props) {
  if(props.list.length > 0) {
    const interests = props.list.map((interest, index) => 
      <li key={ index } >{ interest.name }</li>
    );
    return (  
      <ul className="interests-list">
        { interests }
      </ul>
    );
  } else {
    return (
      <p>None yet</p>
    )
  }
}

InterestsList.defaultProps = {
  list: []
}

InterestsList.propTypes = {
  list: PropTypes.array
}