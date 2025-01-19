import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 shadow-inner">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
          My Professional Expertise
        </h2>
        <p className="text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          With a passion for excellence and innovation, I deliver cutting-edge
          solutions that exceed expectations and drive success for clients
          worldwide.
        </p>
        <div className="space-y-10">
          <div className="transform transition-transform duration-300">
            <div className="flex justify-between mb-2">
              <span className="text-gray-800 font-semibold">
                Web Development
              </span>
              <span className="text-violet-600 font-bold">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-violet-400 to-violet-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="transform transition-transform duration-300">
            <div className="flex justify-between mb-2">
              <span className="text-gray-800 font-semibold">
                Brand Identity
              </span>
              <span className="text-violet-600 font-bold">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-violet-400 to-violet-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="transform transition-transform duration-300">
            <div className="flex justify-between mb-2">
              <span className="text-gray-800 font-semibold">Logo Design</span>
              <span className="text-violet-600 font-bold">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-violet-400 to-violet-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
