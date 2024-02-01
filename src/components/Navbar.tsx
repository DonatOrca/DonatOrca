import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import "./Navbar.css";
import "../Fonts.css";
import useMediaQuery from "./useMediaQuery";

function Navbar() {
  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {matches ? "" : <DarkMode />}
        <button
          className="navbar-toggler justify-content-end"
          itemType="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zM2 7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zM2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/DonatOrca/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/DonatOrca/announcement" className="nav-link">
              Announcement
            </Link>
            <Link to="/DonatOrca/officers" className="nav-link">
              Officers
            </Link>
            <Link to="/DonatOrca/history" className="nav-link">
              History
            </Link>
            {matches ? <DarkMode /> : ""}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
