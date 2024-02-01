import { Link } from 'react-router-dom';

import './Footer.css';

import logo from '../assets/image/donat_christmas_logo.jpg';

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer-heading">
          <h1 className="m-0">DONAT</h1>
        </div>
        <div id="footer-body" className="row fs-4">
          <div className="col">
            <h1>Contacts</h1>
            <ul className="footer-list">
              <li><a href="https://www.facebook.com/OrCaDONAT" target="_blank">Facebook Page</a></li>
              <li><a href="mailto:donat.stiorca@gmail.com" target="_blank">Email</a></li>
              <li><Link to="/DonatOrca/">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col">
            <h1>Copyright</h1>
            <a href="#">Website's License</a>
          </div>
          <div className="col position-relative">
            <img id="footer-logo" src={logo} className="rounded position-absolute"  style={{ width: "96px" }} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
