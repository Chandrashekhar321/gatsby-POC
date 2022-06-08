import { Link } from 'gatsby'
import React from 'react'
import './header.css'

const Header = () => {
  const logout = () => {
    localStorage.removeItem('token')
  }
  return (
    <header>
      <nav>
          <div className='logo'>LOGO</div>
          <ul>
            <li><Link to="/lineup">LineuP</Link></li>
            <li><a href="**">Experience</a></li>
            <li><a href="**">Plan Your Journey</a></li>
            <li><a href="**" className='ticket'>Buy Tickets</a></li>
            <li><Link to="/login" onClick={logout}>Log Out</Link></li>
          </ul>
      </nav>
    </header>
  )
}
export default Header
