import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./components/layout/layout.jsx"
import Confessions from './components/confessions/confessions.jsx'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Footer from './components/footer/footer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='/footer' element={<Footer/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
