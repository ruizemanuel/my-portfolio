import React, { useState } from 'react'
import { 
    Nav, 
    NavLink, 
    NavbarContainer, 
    Span, 
    NavLogo, 
    NavItems, 
    GithubButton, 
    ButtonContainer, 
    MobileIcon, 
    MobileMenu, 
    MobileLink 
} from './NavbarStyledComponents'
import { BsBriefcaseFill } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <BsBriefcaseFill size="1.5rem" /> <Span>Porfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GithubButton 
            style={{
                padding: '10px 16px',
                background: `${theme.primary}`, 
                color: 'white', 
                width: 'max-content'}} 
                href={Bio.github} 
                target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}