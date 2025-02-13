import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import {ArrayDemo1} from './components/ArrayDemo1'
import {ArrayDemo2} from './components/ArrayDemo2'
import { UseStateTask1 } from './components/UseStateTask1'
import { UseStateTask2 } from './components/UseStateTask2'
import { UseStateTask3 } from './components/UseStateTask3'
import { InputDemo1 } from './components/InputDemo1'
import Navbar from './components/Navbar'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { Route, Routes } from 'react-router-dom'
import { HotstartMovies } from './components/hotstar/HotstartMovies'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { Error404 } from './components/hotstar/Error404'
import { Play } from './components/hotstar/Play'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormDemo5 } from './components/form/FormDemo5'
import { FormTask1 } from './components/form/FormTask1'
import { FormTask2 } from './components/form/FormTask2'
import { FormTask3 } from './components/form/FormTask3'
// import ArrayDemo3 from './components/ArrayDemo3'
// import ArrayDemo4 from './components/ArrayDemo4'
// import ArrayDemoTask1 from './components/ArrayDemoTask1'

// import './App.css'

function App() {

  return (
    <>
        <div>
          {/* <Header ></Header>
          <UseStateTask1></UseStateTask1>
          <UseStateTask2></UseStateTask2>
          <UseStateTask3></UseStateTask3> */}
          <Navbar></Navbar>
         <Routes>
          <Route path="/" element={<HotstarWelcome></HotstarWelcome>}></Route>
          <Route path="/home" element={<HotstarHome></HotstarHome>}></Route>
          <Route path="/movies" element={<HotstartMovies></HotstartMovies>}></Route>
          <Route path="/play/:id" element={<Play></Play>}></Route>
          <Route path="/*" element={<Error404></Error404>}></Route>
          <Route path="/formdemo1" element={<FormDemo1></FormDemo1>}></Route>
          <Route path="/formdemo2" element={<FormDemo2></FormDemo2>}></Route>
          <Route path="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
          <Route path="/formdemo4" element={<FormDemo4></FormDemo4>}></Route>
          <Route path="/formdemo5" element={<FormDemo5></FormDemo5>}></Route>
          <Route path="/vehicleservice" element={<FormTask1></FormTask1>}></Route>
          <Route path='/bankkyc' element={<FormTask2></FormTask2>}></Route>
          <Route path = '/bugreport' element={<FormTask3></FormTask3>}></Route>

         </Routes>
          {/* <InputDemo1></InputDemo1> */}
          {/* <ArrayDemo1></ArrayDemo1>
          <ArrayDemo2></ArrayDemo2>
          <ArrayDemo3></ArrayDemo3>
          <ArrayDemo4></ArrayDemo4>
          <ArrayDemoTask1></ArrayDemoTask1>
          <ArrayDemoTask2></ArrayDemoTask2>
          <UseStateDemo1></UseStateDemo1>
          <UseStateDemo2></UseStateDemo2> */}
          {/* <Content></Content> */}
          {/* <Footer></Footer> */}
        </div>
    </>
  )
  
}

export default App
