import React from "react";

const Works = () => {
  // Replace these with your actual image URLs
  const images = [
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737287325/loki_uzetc3.png",
      description: "Loki animation",
      link: "https://www.behance.net/gallery/217084717/loki-animation",
    },
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737287369/mon_evb79j.jpg",
      description: "2d animation monkey",
      link: "https://x.com/PlaySpaceRush/status/1858912811222442300/video/1",
    },
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737287125/driver_lbs1cn.png",
      description: "3D Bike Driver",
      link: "https://www.behance.net/gallery/217086097/driver-animation",
    },
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737287232/edge_omevsw.png",
      description: "Edge Runner animation",
      link: "https://www.behance.net/gallery/217084233/edge-runner-animation",
    },
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737287423/ninja_vdlffl.jpg",
      description: "UE5 Cinematic Footage",
      link: "https://www.behance.net/gallery/175466693/unreal-engine-5-first-cinematic",
    },
    {
      src: "https://res.cloudinary.com/du9af99hf/image/upload/v1737344185/photo_2025-01-19_21-50-53_fie9e0.jpg",
      description: "Spiderman: Yassir's Version",
      link: "https://www.behance.net/gallery/175465381/greek-3d-map",
    },
  ];

  return (
    <div id="works" className="container mx-auto p-10">
      <h1 className="text-4xl font-semibold m-10">SELECTED <span className="text-violet-500">WORKS</span></h1>
      <div className="grid grid-cols-1 </div>sm:grid-cols-2 md:grid-cols-3 gap-10 mx-28">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image.src}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href={image.link}
                target="_blank"
                className="text-black text-lg hover:underline"
              >
                {image.description}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
