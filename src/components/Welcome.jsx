import React from "react";

const Welcome = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/du9af99hf/video/upload/v1737289707/Comp_1_1_1_v9taqm.mp4" type="video/mp4" />
      </video>
      <div className="relative flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Yassir Aitdaoud</h1>
          <p className="text-2xl font-semibold italic text-gray-300">Animator</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
