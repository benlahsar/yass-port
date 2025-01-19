import React from "react";

const FreelanceSection = () => {
  return (
    <div id="freelance" className="bg-black py-12 px-6 text-center relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://marketifythemes.net/html/grax//img/patterns/inspiration-geometry.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="flex justify-between w-full max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          I'm available for freelance work
        </h2>
        <a
          href="#footer"
          className="inline-block text-white font-semibold py-2 px-6 rounded-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default FreelanceSection;
