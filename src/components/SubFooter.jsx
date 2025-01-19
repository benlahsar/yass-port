export default function SubFooter() {
  return (
    <div className="mt-16 bg-gradient-to-r from-gray-900 to-black text-white py-8 px-8 rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src="https://res.cloudinary.com/du9af99hf/image/upload/v1737287088/logo_ehy47b.png"
          alt="logo"
          className="w-20 h-auto rounded-full"
        />
        <div className="flex space-x-6">
          {["Instagram", "Twitter", "Behance"].map((social) => (
            <a
              key={social}
              href="#"
              className="hover:text-violet-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center mt-6 text-sm text-gray-400">
        © COPYRIGHT {new Date().getFullYear()}
      </p>
    </div>
  );
}
