import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import {ArrayDemo1} from './components/ArrayDemo1'
import {ArrayDemo2} from './components/ArrayDemo2'
import ArrayDemo3 from './components/ArrayDemo3'
import ArrayDemo4 from './components/ArrayDemo4'
import ArrayDemoTask1 from './components/ArrayDemoTask1'
import ArrayDemoTask2 from './components/ArrayDemoTask2'
import {UseStateDemo1} from './components/UseStateDemo1'
import {UseStateDemo2} from './components/UseStateDemo2'

// import './App.css'

function App() {

  return (
    <>
        <div>
          <Header ></Header>
          <ArrayDemo1></ArrayDemo1>
          <ArrayDemo2></ArrayDemo2>
          <ArrayDemo3></ArrayDemo3>
          <ArrayDemo4></ArrayDemo4>
          <ArrayDemoTask1></ArrayDemoTask1>
          <ArrayDemoTask2></ArrayDemoTask2>
          <UseStateDemo1></UseStateDemo1>
          <UseStateDemo2></UseStateDemo2>
          {/* <Content></Content> */}
          <Footer></Footer>
        </div>
    </>
  )
  
}

export default App
