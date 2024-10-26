import js from '../assets/images/js.png'
import node from '../assets/images/node.png'
import react from '../assets/images/react.png'
import python from '../assets/images/python.png'
import pandas from '../assets/images/Pandas.png'
import mongodb from '../assets/images/MongoDB.png'
import jupyter from '../assets/images/Jupyter.png'
import django from '../assets/images/Django.png'
import matplotlib from '../assets/images/Matplotlib.png'
import Postgres from '../assets/images/PostgresSQL.png'
import Express from '../assets/images/Express.png'
import Numpy from '../assets/images/NumPy.png'
import Selenium from '../assets/images/Selenium.png'
import Tailwind from '../assets/images/Tailwind CSS.png'
import Typescript from '../assets/images/typescript.png'
const Tools = () => {

  return (
    <div>
      <div>
        <div>
          <h2 className="text-center text-gray-900 text-2xl md:text-3xl font-semibold mb-6">Tools I work with</h2>
        </div>
        {/* Responsive Grid Layout for Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center mx-auto my-10 max-w-screen-lg px-6">
          <img src={js} alt="JavaScript" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Typescript} alt="JavaScript" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={react} alt="React" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Tailwind} alt="Tailwind CSS" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={node} alt="Node.js" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Express} alt="Express.js" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={mongodb} alt="MongoDB" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Postgres} alt="PostgreSQL" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={python} alt="Python" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={pandas} alt="Pandas" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Numpy} alt="Numpy" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={matplotlib} alt="Matplotlib" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={django} alt="Django" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={jupyter} alt="Jupyter" className="h-12 w-12 md:h-16 md:w-16" />
          <img src={Selenium} alt="Selenium" className="h-12 w-12 md:h-16 md:w-16" />
        </div>
      </div>
    </div>
  )
}

export default Tools