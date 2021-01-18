import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/mfarisgibran-logo.svg'

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" />
        <h1>M Faris Gibran</h1>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
