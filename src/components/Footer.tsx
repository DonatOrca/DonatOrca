import { Link } from "react-router-dom";

import "../css/Footer.css";

import logo from "../assets/image/donat_logo.png";
import Modal from "./Modal";
import License from "./License";

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
              <li>
                <Link to="https://www.facebook.com/OrCaDONAT" target="_blank">
                  Facebook Page
                </Link>
              </li>
              <li>
                <Link
                  to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWSZDwLsljWhgKfXlZTnxPndGsDbdpzzxJsvRKfrVDXnMDWdSgtKZJRcmVnzDXKfFzWhN"
                  target="_blank"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link to="/DonatOrca/">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>Copyright</h1>
            <Link
              className="license"
              data-bs-toggle="modal"
              data-bs-target="#licenseModal"
              to={""}
            >
              Website's License
            </Link>
          </div>
          <div className="col position-relative">
            <img
              id="footer-logo"
              src={logo}
              className="rounded position-absolute"
            />
          </div>
        </div>
      </footer>
      <Modal header="GNU GENERAL PUBLIC LICENSE" id="licenseModal">
        <License />
      </Modal>
    </>
  );
};

export default Footer;
