import React from 'react';
import LinkedIn from '../assets/LinkedIn.png';
import '../assets/global.css';
import './style.css';

class HomeTemplate extends React.Component {
  render() {
    return <div class="footer-dark position-relative">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <a href="/privacy">Privace policy</a>
          </div>
          <div class="col text-right">
            <a href="https://www.linkedin.com/in/josh-simon/">
              LinkedIn
            </a>
            <p>mail: joshsimon@gmx.net</p>
          </div>
        </div>
      </div>
    </div>
  }
}
export default HomeTemplate;