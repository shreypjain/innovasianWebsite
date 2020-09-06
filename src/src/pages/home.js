import React from 'react';
import { NavLink } from 'react-router-dom'

function Home() {
    return(
        <div className="">
      <section className="">
        <img
          className="object-cover object-center w-full h-screen"
          src={require('../assets/logo.jpg')}
          alt=""
        />
        <div className="-mt-64 z-50 w-full text-gray-100">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold">Innovasian</h1>
            <h3 className="text-xl md:text-2xl">
              A MediterrAsian Club
            </h3>
            <div className="mt-3 text-2xl">
              <NavLink
                to="/contact"
                className="bg-orange-400 hover:bg-orange-500 transition duration-200 ease-out text-white py-3 px-6 rounded-md shadow-md"
              >
                Buy a ticket
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Home