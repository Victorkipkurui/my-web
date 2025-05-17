import { NavLink } from "react-router-dom";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa6";

const navItems = [
  { path: "/", link: "Home" },
  { path: "/skills", link: "Skills" },
  { path: "/projects", link: "Projects" },
  { path: "/certifications", link: "Certifications" },
  { path: "/blog", link: "Blog" },
  { path: "/contacts", link: "Contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Personal Info */}
        <div>
          <a
            href="/"
            className="text-xl font-bold text-blue-800 block mb-2"
          >
            Victor K
          </a>
          <p className="text-gray-700 mb-4">
            We strive to deliver long-term sustainable value to our end products and make a difference in your growth.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100005200772462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:scale-110 transform transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/Victorkipkurui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:scale-110 transform transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-kipkurui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:scale-110 transform transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ruckuz23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:scale-110 transform transition duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-blue-700 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h2 className="text-lg font-bold text-blue-700 mb-3">Contacts</h2>
          <div className="text-gray-700 space-y-3">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>TransNational Plaza 2nd Floor</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>kipkuruivictor23@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+254715826509</p>
              <p>+254713000832</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div>
          <h2 className="text-lg font-bold text-blue-700 mb-3">Feedback</h2>
          <form action="post" className="flex flex-col space-y-3">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Enter Your Name"
            />
            <textarea
              className="border p-2 rounded w-full min-h-[100px]"
              placeholder="Submit your feedback"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-10">
        © {new Date().getFullYear()} Victor Kipkurui. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
