import React from 'react';
import './InterestList.css';

export default function InterestList(props) {
  const interests = props.list.map(interest => 
    <li>{ interest.name }</li>
  );
  return (  
    <ul>
      { interests }
    </ul>
  );
}