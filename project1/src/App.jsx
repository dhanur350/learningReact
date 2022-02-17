import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import * as Day1 from './components/Day1'

console.log(Day1)

function App() {

  return (
    <div className="App">
	  <h1>This is App component</h1>
	  <Day1.Component1/>
	  <Day1.Component2/>
	  <Day1.Component3/>
    </div>
  )
}

export default App
