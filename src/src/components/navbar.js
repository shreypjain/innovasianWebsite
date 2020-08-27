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
  function onClick() {
    let hamburger = document.getElementById('hamburgerbtn')
    let mobileMenu =document.getElementById('mobileMenu')

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active')
    })
}
function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img src="src/src/assets/logo.jpg"></img>
    <span class="font-semibold text-xl tracking-tight">Innovasian</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={onClick()}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Ticketing
      </a>
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Club
      </a>
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Contact
      </a>
    </div>
    {/* <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div> */}
  </div>
</nav>
    )
}
export default Navbar