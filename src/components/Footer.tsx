import { NavLink } from "react-router-dom"
import { FaXTwitter,FaGithub,FaLinkedin,FaFacebookF } from "react-icons/fa6";

const navItems = [
  {path:'/', link:"Home"},
  {path:'/skills', link:"Skills"},
  {path:'/projects', link:"Projects"},
  {path:'/certifications', link:"Certifications"},
  {path:'/blog', link:"Blog"},
  {path:'/contacts', link:"Contacts"}
]
const Footer = () => {
  return (
    <div className=" bg-gray-100 p-6">
     <div className="flex flex-col lg:flex-row lg:gap-36 gap-10 px-6 sm:px-16 md:px-28 py-8">
        {/* Section 1: Personal Info */}
        <div className="my-3">
          <a href="/" className="text-lg sm:text-xl font-bold text-blue-800 py-3">Victor K</a>
          <p className="w-full sm:w-60 lg:w-40">We strive to deliver long-term sustainable value to our end products and make a difference in your growth.</p>
          <div className="grid grid-cols-4 gap-3 py-2">
            <a href="https://www.facebook.com/profile.php?id=100005200772462" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:scale-110 transform transition-transform duration-300" />
            </a>
            <a href="https://github.com/Victorkipkurui" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:scale-110 transform transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/victor-kipkurui" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:scale-110 transform transition-transform duration-300" />
            </a>
            <a href="https://x.com/ruckuz23" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:scale-110 transform transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="my-3">
          <h2 className="font-bold text-blue-700 my-3">Quick Links</h2>
          <ul>
            {
              navItems.map(({ path, link }) => (
                <li className="text-gray-700 font-semibold list-none hover:text-blue-600" key={path}>
                  <NavLink to={path}>{link}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Section 3: Contacts */}
        <div className="my-3">
          <h1 className="font-bold text-blue-700 my-3 text-lg">Contacts</h1>
          <h2 className="py-2 font-semibold">Address</h2>
          <p>Sultan House, Kamiti Road. Roysambu-Nairobi</p>
          <h2 className="py-2 font-semibold">Email</h2>
          <p>kipkuruivictor23@gmail.com</p>
          <h2 className="py-2 font-semibold">Phone</h2>
          <p>+254715826509</p>
          <p>+254713000832</p>
        </div>

        {/* Section 4: Feedback Form */}
        <div className="my-3">
          <h1 className="font-bold text-blue-700 my-3">Feedback</h1>
          <form action="post">
            <input 
              type="text" 
              className="border-2 p-2 w-full sm:w-72 my-3" 
              placeholder="Enter Your Name" 
            />
            <textarea 
              className="border-2 p-2 w-full sm:w-72 my-3" 
              placeholder="Submit your feedback" 
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-5 py-1 rounded my-3 hover:bg-blue-900">
              Submit
            </button>
          </form>
        </div>
      </div>
        <div className="text-center py-5">©{new Date().getFullYear()} Victor Kipkurui. All rights Reserved.</div>
    </div>
  )
}

export default Footer