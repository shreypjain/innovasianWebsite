import React from 'react';
import { NavLink } from 'react-router-dom'

const navbarStyle = {
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)",
    opacity: ".95",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
  };
function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg mb-3" style={navbarStyle}>
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="inline-flex">
            <img src="assets/samarkan-normal.png" className="mx-5"></img>
            <a
              className="text-sm font-bold leading-relaxed inline-block mx-1 mr-4 whitespace-no-wrap uppercase text-black"
              href="#pablo"
            >
              Innovasian
            </a>
            </div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
}
export default Navbar