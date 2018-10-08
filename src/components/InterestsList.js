import React from 'react';
import PropTypes from 'prop-types';

export default function InterestsList(props) {
  const interests = props.list.map((interest, index) => 
    <li key={ index } >{ interest.name }</li>
  );
  return (  
    <ul>
      { interests }
    </ul>
  );
}

InterestsList.defaultProps = {
  list: []
}

InterestsList.propTypes = {
  list: PropTypes.array
}