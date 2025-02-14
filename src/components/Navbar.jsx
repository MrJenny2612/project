import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        {/* <hr /> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <a class="navbar-brand" href="#">Hotstar</a>
  <button class="navbar-toggler" type="   button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        {/* <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">FormDemo1</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">FormDemo2</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">FormDemo3</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">FormDemo4</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">FormDemo5</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">FormDemo6</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">FormDemo7</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/vehicleservice">Task1</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/bankkyc">Task2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bugreport">Task3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar