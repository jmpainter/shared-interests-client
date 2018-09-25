import React from 'react';
import './InterestList.css';

export default function InterestList(props) {
  let interests = null;
  if(props.list) {
    interests = props.list.map((interest, index) => 
      <li key={ index } >{ interest.name }</li>
    );
  } 
  return (  
    <ul>
      { interests }
    </ul>
  );
}