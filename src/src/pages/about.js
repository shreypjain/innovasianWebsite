import React from 'react'
import { NavLink } from 'react-router-dom'

const bgStyle={
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)"
}

function About() {
    return(
        <div className="mt-36">
            <div className="mt-24 shadow-lg rounded-b-lg sm:mx-auto md:mx-auto max-w-full sm:max-w-full md:max-w-5xl relative overflow-hidden">
                <img className="mx-auto h-16 w-24" src={require("../assets/shrey.jpg")} alt={require("../assets/shashank.jpg")}/>

            </div>
        </div>
    )
}
export default About