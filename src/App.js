import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';


export default function App() {
  const [mode, setMode] = React.useState(true)
  const [f, setF] = React.useState({sf : '', cf : 'Filter by Region'})
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path = "/" element = {<Home f = {f} setF = {setF}/>}/>
      <Route path = "/:id" element = {<Detail/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </>
  ))
  return (
    <div className = {mode ? 'Appd' : 'Appl'}>
      <Navbar mode = {mode} setMode = {setMode}/>
      <RouterProvider router = {router}/>
    </div>
  )
}