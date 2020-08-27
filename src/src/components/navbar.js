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
    return (
        <nav style={navbarStyle}>
            <ul class="flex">
                <li class="flex-1 mr-2">
                    <a class="text-center block border rounded py-2 px-4 hover:bg-white text-white" href="#">Active Item</a>
                </li>
                <li class="flex-1 mr-2">
                    <a class="text-center block border rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
                </li>
                <li class="text-center flex-1">
                    <a class="block py-2 px-4 text-gray-400" href="#">Disabled Item</a>
                </li>
            </ul>
    </nav>
    )
}
export default Navbar