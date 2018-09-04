import React from 'react';
import './AddInterest.css';
 
export default function AddInterest(props) {
  return (
    <form className="add-interest">
      <label for="interest">New Interest:</label>
      <input type="text" name="interest" id="interest" value="Gardening" />
      <button type="submit">Search</button> 
    </form>
  )
}