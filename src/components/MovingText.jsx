import React from "react";

const MovingText = () => {
  return (
    <div>
      <div className="relative overflow-hidden h-40">
        <div className="absolute inset-x-0 animation-scrolling-text">
          <span
            className="text-transparent lg:px-4 py-2 lg:text-7xl text-4xl font-semibold uppercase
          text-stroke-3"
          >
            Our reputation world wide partners
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
