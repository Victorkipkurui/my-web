import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/BackToTop'
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

export default App
