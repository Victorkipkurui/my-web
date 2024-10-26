import About from "../pages/About"
import FrontPage from "../components/FrontPage"
import Highlights from "../components/Highlights"
import Tools from "../components/Tools"
import Certifications from "./Certifications"
import Projects from "./Projects"

const Home = () => {
  return (
    <div>
      <FrontPage/>
      <About/>
      <Tools/>
      <Projects/>
      <Highlights/>
      <Certifications/>
    </div>
  )
}

export default Home