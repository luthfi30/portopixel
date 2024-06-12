import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      {/* <div>
        <h2 className="text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pb-20">Our agile process is ability to adapt and respond to changes</h2>
        <a href="/">
          <div className="bg-[url('/src/assets/video_bg.jpeg')] bg-cover bg-no-repeat cursor-pointer cs-video_block cs_style1 cs-video_open cs_bg">
            <span className="cs-player-btn">
              <span></span>
            </span>
          </div>
        </a>
      </div> */}
      {/* <div className="h-28"></div> */}

      {/* Blog Section */}
      <div className="relative" id="blogs">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 ">
          <div className="lg:w-1/3 space-y-5 z-30">
            <h2 className="text-gray-200 font-semibold text-2xl">Our Blog</h2>
            <h2 className="text-5xl font-bold mb-5 leading-snug text-white">Explore recent publication</h2>
            <a href="" className="inline-flex item-center gap-2 font-semibold hover:text-orange-50 transition-all duration-300 ease-in">
              <span>View More Blog</span>
              <BsArrowRight />
            </a>
          </div>

          {/*  Card */}
          <div className="lg:w-2/3 my-8">
            <div className="flex mb-10">
              <div className="h-8 w-1/3 rounded-s-2xl bg-white"></div>
              <div className="h-8 w-1/2 bg-red-500"></div>
              <div className="h-8 w-1/3  bg-blue-700"></div>
              <div className="h-8 w-1/3 rounded-e-2xl bg-orange-500"></div>
            </div>
            {/* blog Card */}

            <BlogCard />

            {/* btn */}

            <div className="w-full mx-auto relative">
              <button className="lg:absolute right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange-500 hover:text-white transition-all duration-300 hover:translate-y-3">View More</button>
            </div>
          </div>
        </div>

        {/* shapes */}
        <div className="hidden lg:block">
          <div className="cs-shape_4"></div>
          <div className="cs-shape_4"></div>
        </div>
        <div className="lg:h-60 h-8"></div>
      </div>
    </div>
  );
};

export default Blog;
