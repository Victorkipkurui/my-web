import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
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
import Shop from './pages/Shop';

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
    },{
      path: '/shop',
      element:<Shop/>
    }]
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
     </ClerkProvider>
  </StrictMode>,
)