import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link to="/">Home </Link>
      <Link to="/login">Log In </Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}