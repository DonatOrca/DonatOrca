/*
TODO: Make hover underline
*/

import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="md:flex md:justify-between md:p-5">
        <DarkMode />
        <div
          className={`fixed inset-0 flex justify-center px-4 pb-3 pt-12 md:static md:inset-auto md:block md:bg-transparent md:bg-opacity-100 md:p-0 ${showNav ? "bg-txc bg-opacity-25 backdrop-blur-sm" : ""}`}
        >
          <i
            className={`${showNav ? "fa-solid fa-xmark" : "fa-regular fa-bars"} absolute right-0 top-0 flex cursor-pointer justify-end p-4 md:opacity-0`}
            onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
          ></i>
          <div
            className={`${showNav ? "opacity-100" : "opacity-0"} w-[550px] transition-opacity duration-300 ease-in-out sm:duration-0 md:opacity-100`}
          >
            <div className="h-full rounded-lg bg-bgc px-5 pt-3 md:bg-transparent md:p-0">
              <ul className="group font-kollektif md:visible md:flex md:justify-end lg:text-xl">
                <li className="my-3 mr-[6em] md:my-6">
                  <Link
                    to={"/Donat/dashboard"}
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
                    to={"/Donat/officers"}
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
