import { useState } from 'react'
import './navbar.scss'

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='logo.png' alt='logo' />
          <span>ReelEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/' className='signIn'>
          Sign in
        </a>
        <a href='/' className='signUp'>
          Sign up
        </a>
        <div className='menuIcon'>
          <img src='/menu.png' alt='menu' onClick={() => setMenu(!menu)} />
        </div>
        <div className={menu ? 'menu active' : 'menu'}>
          {' '}
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar