import React from "react"
// import "./index.css"

export default function Footer() {
  return <footer className="relative bg-blueGray-200 pt-8 pb-6 ">
    <div className="mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms,
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <a href="https://www.facebook.com/groups/1695627907322138" target="_blank"> <button className=" bro fa fa-facebook" type="button"></button> </a>
            <a href="https://www.instagram.com/health/" target="_blank"><button className="bro fa fa-instagram" type="button"></button></a>
            <a href="https://twitter.com/mohfw_india?lang=en" target="_blank"><button className="bro fa fa-twitter" type="button"></button></a>
            <a href="https://www.linkedin.com/company/healthcare-com/" target="_blank"><button className="bro fa fa-linkedin" type="button"></button></a>



          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">About Us</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Blog</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Github</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Free Products</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">MIT License</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com?ref=njs-profile">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span><a className="text-blueGray-500 hover:text-gray-800" target="_blank"> health by</a>
            <a className="text-blueGray-500 hover:text-blueGray-800"> syntax_squad</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
}