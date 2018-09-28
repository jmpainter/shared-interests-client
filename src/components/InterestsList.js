import React from 'react';

export default function InterestList(props) {
  if(props.list.length === 0) {
    return <p>Loading...</p>
  } else {
    const interests = props.list.map((interest, index) => 
      <li key={ index } >{ interest.name }</li>
    );
    return (  
      <ul>
        { interests }
      </ul>
    );
  }
}