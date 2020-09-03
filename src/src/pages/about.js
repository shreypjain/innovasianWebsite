import React from 'react'
import NavLink from 'react-router-dom'

const bgStyle={
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)"
}

function About() {
    return(
        <div>
            <div className="mt-24 shadow-lg rounded-b-lg sm:mx-auto md:mx-auto max-w-full sm:max-w-full md:max-w-5xl overflow-hidden"> 
            <div className="md-flex bg-white rounded-lg p-6" style={bgStyle}>
                <img className="h-32 w-48 px-2" src={require("../assets/shrey.jpg")}/>
                <div className="w-full pr-5 md:w-full md:pr-5 h-full">
                    <p className="sm:text-base md:text-md w-full mt-3 text-gray-800 text-sm">
                    </p>
                </div>
        </div>
        </div>
        </div>
    )
}
export default About