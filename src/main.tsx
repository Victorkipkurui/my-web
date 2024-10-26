import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog'
import App from './App';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contacts from './pages/Contacts';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[{
      path: '/',
      element: <Home/>
    },{
      path: '/blog',
      element: <Blog/>
    },{
      path: '/certifications',
      element: <Certifications/>
    },{
      path: '/projects',
      element: <Projects/>
    },{
      path: '/contacts',
      element: <Contacts/>
    },{
      path: '/skills',
      element: <About/>
    }]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)