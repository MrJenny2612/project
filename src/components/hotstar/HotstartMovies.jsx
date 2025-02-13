import React from 'react'
import { Link } from 'react-router-dom'

export const HotstartMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Hotstart Movies</h1>
        <ul>
          <li><Link to="/play/moneyheist">Money Heist</Link></li>
          <li><Link to="/play/10090">Ind-Eng ODi</Link></li>
          <li><Link to="/play/">ok</Link></li>
        </ul> 
    </div>
  )
}
