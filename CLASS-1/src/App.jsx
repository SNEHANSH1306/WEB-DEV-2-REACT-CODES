import React from 'react'
import Parent from './PropsPassing/Parent'
import IfElse from './ConditionalRendering/IfElse'
import Ternary from './ConditionalRendering/Ternary'
import MultipleJSX from './ConditionalRendering/MultipleJSX'
import UseStateOne from './Hooks/UseStateOne'
import ShowHide from './Hooks/ShowHide'
import DarkLight from './Hooks/DarkLight'
import FormHandling from './Hooks/FormHandling'

const App = () => {
  return (
    <div>
      <FormHandling/>
      <ShowHide/>
      <DarkLight/>
      {/* <MultipleJSX/>
      <IfElse/>
      <Ternary/>
      <UseStateOne/> */}
      {/* <Parent/> */}
    </div>
  )
}

export default App