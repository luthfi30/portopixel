import React, { useState, useEffect } from "react";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("postData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {blogs.slice(0, 3).map((blog) => (
        <div className="relative cursor-pointer rounded-xl" key={blog.id}>
          <img src={blog.image} alt="" className="rounded-xl" />
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-black/70 hover:bg-black/40 flex items-end
          justify-center rounded-xl p-4"
          >
            <div>
              <p className="px-3 mb-2 text-base">{`${blog.date} ${blog.month} ${blog.year}`}</p>
              <h4 className="mb-4 text-lg font-semibold px-3">{blog.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
