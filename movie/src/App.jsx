import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewMovie from './components/ViewMovie'
import Navbar from './components/Navbar'
import AddMovie from './components/AddMovie'
import { Route,Routes } from 'react-router-dom'

function App(){
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<ViewMovie/>}></Route>
      <Route path='/addmovie' element={<AddMovie/>}></Route>
      <Route path='/' element={<ViewMovie/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
