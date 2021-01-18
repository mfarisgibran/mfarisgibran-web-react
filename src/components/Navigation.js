import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../images/mfarisgibran-logo.svg'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #473720;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  a {
    color: #fff;
    text-decoration: none;
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 10px;
  }
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 10px;
  }
`

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <img src={logoImage} alt="logo" height={18} />
          <h1>M Faris Gibran</h1>
        </Logo>
      </Link>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  )
}
