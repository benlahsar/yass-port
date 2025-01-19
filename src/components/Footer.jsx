import { AtSign, Facebook, Globe, Instagram, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div id="footer" className="bg-gradient-to-b from-white to-gray-50 px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          GET IN TOUCH
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 text-gray-600 space-y-6 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg">
          {[
            [<MapPin />, "Address", "Av. My Ismail, Marrakech, Morocco"],
            [<AtSign />, "Email", "yasssir.aitdaoud@gmail.com"],
            [<Phone />, "Phone", "+212 777-129928"],
            [<Globe />, "Behance", "yassir aitdaoud"],
            [<Twitter />, "Twitter", "@yassiraitdaoud"],
            [<Instagram />, "Instagram", "@yassiraitdaoud"],
            [<Youtube />, "Youtube", "@YassirAnimation"],
          ].map(([icon, label, value]) => (
            <div
              key={label}
              className="flex items-center space-x-3 hover:translate-x-2 transition-transform"
            >
              <span className="text-2xl">{icon}</span>
              <p>
                <span className="font-bold">{label}:</span> {value}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
