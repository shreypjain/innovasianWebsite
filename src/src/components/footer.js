import React from 'react'
import NavLink from 'react-router-dom'

const bgStyle = {
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)",
    opacity: ".95",
}

function Footer() {
    return (
      <footer className="">
        <div className="w-full sm:mx-auto">
          <div className="flex w-1/3">
            <h2 className="text-xl">Social Media Links</h2>

          </div>
        </div>
      </footer>
    )
}
export default Footer