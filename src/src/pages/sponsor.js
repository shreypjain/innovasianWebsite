import React from 'react'

function Sponsor() {
    return(
            <div className="mt-2">
            <h2 className="mt-6 text-center underline text-4xl leading-9 font-extrabold text-gray-900">
                Sponsors
              </h2>
        <div className="mx-auto rounded-b-lg text-center text-l leading-9 text-gray-900 py-4 sm:mx-auto md:mx-auto max-w-full sm:max-w-full md:max-w-5xl relative overflow-hidden">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={require("../assets/shrey.jpg")} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Patidar: Cash and Carry</div>
            </div>
        </div>
          </div>
          {/* <div className="mx-auto shadow-lg rounded-b-lg text-center text-l leading-9 text-gray-900 py-4 sm:mx-auto md:mx-auto max-w-full sm:max-w-full md:max-w-5xl relative overflow-hidden"><p>
          When ordering or registering on our site, as appropriate, you may be asked
      to enter your name, email address, credit card information or other
      details to help you with your experience.
          </p></div> */}

            </div>
    )
}
export default Sponsor