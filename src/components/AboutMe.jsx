import { ChevronDown, ChevronRight, ChevronsRight } from "lucide-react";

export default function AboutMe() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-white to-gray-50 p-12 rounded-2xl shadow-xl">
      {/* Image Section */}
      <div className="w-full md:w-1/3 transform transition-transform hover:scale-105">
        <div className="relative">
          <div className="absolute -inset-4 bg-violet-500/20 rounded-xl blur-xl"></div>
          <img
            src="https://res.cloudinary.com/du9af99hf/image/upload/v1737287066/profile_fptzkx.jpg"
            alt="Profile"
            className="relative rounded-xl shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="w-full md:w-2/3 mt-12 md:mt-0 md:ml-12 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 relative inline-block">
          ABOUT <span className="text-purple-500">ME</span>
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-violet-500 rounded-full"></div>
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Hello! I'm Yassir Aitdaoud. Passionate digital artist with expertise in 2D animation, 3D modeling, motion graphics, VFX, and illustration. I bring creativity, attention to detail, and a strong work ethic to every project. My goal is to produce high-quality work that exceeds client expectations and leaves a lasting impact.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            "Story Boarding",
            "Character Design",
            "Animation",
            "3D Modeling",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center space-x-3 group transition-all duration-300 hover:translate-x-2"
            >
              <span className="text-violet-500 transform transition-transform">
                <ChevronsRight />
              </span>
              <p className="text-gray-700">{skill}</p>
            </div>
          ))}
        </div>
        <button className="group relative px-8 py-4 bg-violet-500 text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30">
          <a href="src/assets/cv.pdf" className="relative z-10">Download CV</a>
          <div className="absolute inset-0 h-full w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></div>
        </button>
      </div>
    </div>
  );
}
