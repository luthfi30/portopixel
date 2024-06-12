import React from "react";
import { BsArrowRight } from "react-icons/bs";
import service1 from "../src/assets/service_1.jpeg";
import service2 from "../src/assets/service_2.jpeg";
import service3 from "../src/assets/service_3.jpeg";
import service4 from "../src/assets/service_4.jpeg";

const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>
      {/* Services Section */}
      <div className="lg:flex lg:justify-between item-start" id="services">
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">What we can do</h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">Services we can help you with</h2>
          <a
            href=""
            className="inline-flex item-center gap-2 font-semibold hover:text-orange-50
            transition-all duration-300 ease-in"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </a>
        </div>
        {/* Services Card */}
        <div className="lg:w-2/3 my-8">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-card">
              <a href="" className="rounded-2xl block relative">
                <img src={service1} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange-600 mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">UI/UX Design</h2>
                </div>
              </a>
            </div>
            <div className="lg:w-1/4 hidden lg:block"></div>

            <div className="service-card">
              <a href="" className="rounded-2xl block relative">
                <img src={service2} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange-600 mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">React Js Project</h2>
                </div>
              </a>
            </div>

            <div className="service-card">
              <a href="" className="rounded-2xl block relative">
                <img src={service3} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange-600 mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">Digital Marketing</h2>
                </div>
              </a>
            </div>
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-card">
              <a href="" className="rounded-2xl block relative">
                <img src={service4} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange-600 mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">Technology</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};

export default Services;
