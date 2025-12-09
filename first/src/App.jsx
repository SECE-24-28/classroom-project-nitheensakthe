import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let city = "Bangalore"
  let nums = [10,20,30]


  return (
    <>
      <p>I am From {city}</p>
      <p> Lucky Number : {nums}</p>
      <p>{"true"}</p>

      <p>{JSON.stringify({Name:"Rohit",Age:25})}</p>

    </>
  )
}


export default App
