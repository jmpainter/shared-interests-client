import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="icon-links">
        <a href="https://www.linkedin.com/in/josh-painter-bb03741/"><i className="fab fa-linkedin-in fa-lg"></i></a>
        <a href="https://github.com/jmpainter"><i className="fab fa-github fa-lg"></i></a>
        <a href="mailto:jpainter4@gmail.com"><i className="far fa-envelope fa-lg"></i></a>
      </div>
      <p>Copyright 2018 <a href="http://joshuapainter.com/">Josh Painter</a></p>
    </footer>
  )
}