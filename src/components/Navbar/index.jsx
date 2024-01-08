import React from 'react'
import {
    Nav,
    NavLink,
    NavContainer,
    Span,
    NavLogo,
    NavItems,
    GithubButton,
    ButtonContainer,
    MobileIcon,
    MobileMenu,
    MobileNavLogo,
    MobileLink
} from './NavbarStyledComponents'
import { DiCssdeck } from 'react-icons/di';

export const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon></MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton>Github Profile</GithubButton>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    )
}
