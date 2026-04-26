import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Parent from './propsPassing/Parent'
import IfElse from './ConditionalRendering/IfElse'
import Ternary from './ConditionalRendering/Ternary'
import MultiPleJSX from './ConditionalRendering/MultiPleJSX'
import UseStateOne from './Hooks/UseStateOne'
import ShowHide from './Hooks/ShowHide'
import FormHandling from './Hooks/FormHandling'
import WindowResize from './Hooks/WindowResize'
import DataFetching from './Hooks/DataFetching'
import DarkLight from './Hooks/DarkLight'

const App = () => {
  return (
    <div>
      <FormHandling/>
      <ShowHide/>
      <DarkLight/>
      <WindowResize/>
      <DataFetching/>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Courses/>
      <Footer/>
      {/* <MultipleJSX/>
      <IfElse/>
      <Ternary/>
      <UseStateOne/> */}
      {/* <Parent/> */}
    </div>
  )
}

export default App