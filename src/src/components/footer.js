import React from 'react'
import NavLink from 'react-router-dom'

const bgStyle = {
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)",
    opacity: ".95",
}

function Footer() {
    return (
      <div class="container sticky bg-grey-lighter p-8">
    <div class="mt-24 sm:flex mb-4">
  <div class="sm:w-1/4 h-auto">
      <div class="text-orange mb-2">Orange</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-orange-500 text-grey-darker">One</li>
          <li class="hover:text-orange-500 text-grey-darker">Two</li>
          <li class="hover:text-orange-500 text-grey-darker">Three</li>
          <li class="hover:text-orange-500 text-grey-darker">Four</li>
          <li class="hover:text-orange-500 text-grey-darker">Five</li>
          <li class="hover:text-orange-500 text-grey-darker">Six</li>
          <li class="hover:text-orange-500 text-grey-darker">Seven</li>
          <li class="hover:text-orange-500 text-grey-darker">Eight</li>
      </ul>
  </div>
  <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
      <div class="text-blue mb-2">Blue</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-blue-500 text-grey-darker">One</li>
          <li class="hover:text-blue-500 text-grey-darker">Two</li>
          <li class="hover:text-blue-500 text-grey-darker">Three</li>
      </ul>

    <div class="text-blue-500 mb-2 mt-4">Blue-light</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-blue-500 text-grey-darker">One</li>
          <li class="hover:text-blue-500 text-grey-darker">Two</li>
          <li class="hover:text-blue-500 text-grey-darker">Three</li>
      </ul>

  </div>
  <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div class="text-green-700 mb-2">Green-dark</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-green-700 text-grey-darker">One</li>
          <li class="hover:text-green-700 text-grey-darker">Two</li>
          <li class="hover:text-green-700 text-grey-darker">Three</li>
      </ul>

    <div class="text-green-300 mb-2 mt-4">Green-light</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-green-700 text-grey-darker">One</li>
          <li class="hover:text-green-700 text-grey-darker">Two</li>
          <li class="hover:text-green-700 text-grey-darker">Three</li>
      </ul>
  </div>
    <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
        <div class="text-red-light mb-2">Newsletter</div>
        <p class="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
        <div class="mt-4 flex">
            <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address"/>
            <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
        </div>
    </div>

</div>
</div>
    )
}
export default Footer