import React from 'react'
import styled  from 'styled-components'
import tw from 'tailwind.macro'
import TopBar from './TopBar'
import NavBar from './navBar'


export default function Header(props) {
  const HeaderWrapper = styled.header`
    ${tw`container  fixed `}
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100vw;
    
    .transparentNavBar{
        opacity: 0.71;
        transition: opacity 1s ease-out 0s;
    }
    
    .fullNavBar{
        opacity: 1;
        transition: opacity 1s ease-out 0s;
    }
  `

  const NavBarOverlay = styled.div`
    ${tw`container absolute w-full h-16`}
    background-color: #0d266c;
    z-index: -1;
    
    @media screen and (max-width: 765px) {
      opacity: 1 !important;
    }
  `

  return (
    <HeaderWrapper>
      <TopBar className="top-bar bg-white text-xl"/>
      <NavBarOverlay id="nav-bar-overlay" className="navBarOverlay transparentNavBar" />
      <NavBar />
    </HeaderWrapper>
  )
}
