/*
TODO: Make hover underline
*/

import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <>
      <nav className="md:flex md:justify-between md:p-5">
        <DarkMode />
        <i className="fa-regular fa-bars absolute right-0 top-0 flex cursor-pointer justify-end p-4 md:opacity-0"></i>
        <ul className="group font-kollektif opacity-0 md:flex md:justify-end md:opacity-100 lg:text-xl">
          <li className="my-3 mr-[6em] md:my-6">
            <Link
              to={"/Donat/"}
              className="hover:!filter-none group-hover:blur-[0.7px]"
            >
              Dashboard
            </Link>
          </li>
          <li className="my-3 mr-[6em] md:my-6">
            <Link
              to={"/Donat/"}
              className="hover:!filter-none group-hover:blur-[0.7px]"
            >
              Announcement
            </Link>
          </li>
          <li className="my-3 mr-[6em] md:my-6">
            <Link
              to={"/Donat/"}
              className="hover:!filter-none group-hover:blur-[0.7px]"
            >
              Officers
            </Link>
          </li>
          <li className="my-3 mr-[6em] md:my-6">
            <Link
              to={"/Donat/"}
              className="hover:!filter-none group-hover:blur-[0.7px]"
            >
              History
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
