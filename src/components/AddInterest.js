import React from 'react';
import './AddInterest.css';
 
export default function AddInterest(props) {
  return (
    <form className="add-interest">
      <label htmlFor="interest">New Interest:</label>
      <input type="text" name="interest" id="interest" value="Gardening" />
      <button type="submit">Search</button> 
    </form>
  )
}