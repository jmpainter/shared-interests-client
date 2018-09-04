import React from 'react';
import './CategoriesInterestsList.css';

export default function CategoriesInterestsList(props) {
  return (
    <ul>
      <li>Knitting</li>
      <ul>
        <li><a href="user-detail.html">sknit, Tahoe, CA</a></li>
        <li><a href="user-detail.html">rrenolds, VT</a></li>
      </ul>
      <li>Football</li>
      <ul>
        <li><a href="user-detail.html">Barry, NY</a></li>
      </ul>
      <li>Tennis</li>
      <ul>
        <li><a href="user-detail.html">Sue, Los Angeles, CA</a></li>
        <li><a href="user-detail.html">footBallLvr, Philadelphia, PA</a></li>
      </ul>
    </ul>
  );
}