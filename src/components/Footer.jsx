import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white" id="contact">
      {/* Footer top */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        {/* Footer Logo */}
        <div className="space-y-4 lg:w-1/3">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-orange-400">P</span>ixelPulse Studio
          </a>
          <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {/* Social Icon */}
          <div className="flex gap-5 text-white">
            <a href="" className="block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300 ">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="" className="block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300 ">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="" className="block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300 ">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="" className="block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300 ">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* services */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <div className="space-y-3 text-gray-500">
            <a href="" className="block">
              UI/UX Design
            </a>
            <a href="" className="block">
              Web Development
            </a>
            <a href="" className="block">
              Digital Marketing
            </a>
            <a href="" className="block">
              React Development
            </a>
          </div>
        </div>
        {/* contact */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="space-y-3 text-gray-500">
            <p>+6289625586181</p>
            <p>arino@gmail.com</p>
            <p>
              Jl.pemuda no 30, <br /> 13789 Jakarta, Indonesia{" "}
            </p>
          </div>
        </div>

        {/* subscribe */}
        <div className="space-y-4 lg:w-96">
          <h2 className="text-xl font-semibold">Subscribe</h2>
          <div className="space-y-3 text-gray-500">
            <div className="relative w-full">
              <input type="email" placeholder="Enter your email" className="newsletter_input" />
              <button className="newsletter_btn">
                <span>send</span>
              </button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-700" />
      <div className="h-8"></div>

      {/* copyright */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright @ Arino 2024</p>
        <p>Terms of Use | privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
