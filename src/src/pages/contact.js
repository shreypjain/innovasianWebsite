import React from 'react'
import NavLink from 'react-router-dom'

const bgStyle={
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)",
    opacity: "0.95",
    position: "relative",
    top: "0",
    right: "0",
    left: "0",
}

function Contact() {
    return(
            <div className="mt-24">
                <div className="mx-auto shadow-ld rounded-b-lg sm:mx-auto md:mx-auto max-w-full sm:max-w-full md:max-w-5xl relative">
                    <form className="mt-8">
                    <div className="mt-5">
                            <label className="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">Name: </label>
                            <input
                                className="appearance-none rounded relative block w-full px-3 py-2 border bg-gray-200 border-orange-500 placeholder-gray-600 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                                aria-label="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Shrey Patel"
                            >
                            </input>
                        </div>
                        <div className="mt-5">
                            <label className="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">Email: </label>
                            <input
                                className="appearance-none rounded relative block w-full px-3 py-2 border bg-gray-200 border-orange-500 placeholder-gray-600 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                                aria-label="email"
                                name="email"
                                type="text"
                                required
                                placeholder="shreyp@gmail.com"
                            >
                            </input>
                        </div>
                        <div className="mt-5">
                            <label className="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">Feedback </label>
                            <textarea
                                className="appearance-none rounded relative block w-full px-3 py-2 border bg-gray-200 border-orange-500 placeholder-gray-600 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                                aria-label="feedback"
                                name="feedback"
                                type="text"
                                rows="5"
                                cols="33"
                                required
                                placeholder="Please leave your feedback here with your email. We will get back to you as soon as possible!"
                            >
                            </textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white shadow-xl bg-gray-900 hover:bg-orange-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default Contact