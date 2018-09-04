import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link to="/">Home </Link>
      <Link to="/register">Register </Link>
      <Link to="/add-edit-interests">Add / Edit Interests </Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}