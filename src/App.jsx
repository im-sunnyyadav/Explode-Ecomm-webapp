import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { RecoilRoot } from 'recoil'
import {  Outlet } from 'react-router-dom'
import { useRef } from 'react'


function App() {
  const contactRef = useRef()

  return (
    <>
      <RecoilRoot>
          <Navbar contactRef={contactRef}></Navbar>
          <Outlet></Outlet>
          <Footer contactRef={contactRef}></Footer>
      </RecoilRoot>
      
    </>
  )
}

export default App
