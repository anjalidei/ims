import tw from 'tailwind.macro'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo/logo3x.png'
import Headings from '../../components/utils/Heading'

const Nav = styled.nav`
  ${tw`container w-full h-16 sm:flex-col flex lg:flex-row relative`}
  background-color: 'transparent';
  text-decoration: none;
`
const ListItem = styled.li`
  ${tw`list-none w-full text-right  lg:mr-0 lg:text-left py-4 lg:py-0 relative no-underline inline`}
  margin-left: 3vw;
  
  @media screen and (max-width: 765px){
    background: #0d266c;
    margin-left: 0;
  }
`

const NavLink = styled.a`
  ${tw`font-robotoMedium pr-4 lg:pr-0 text-2xl lg:text-lg xl:text-xl inline text-white`}
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  
  ::before{
   content:'';
   opacity: 0;
   position: absolute;
   top: 25px;
   left: 0;
   width: 50px;
   height: 1px;
   background: #eabd00;
  }
  
  @media screen and (max-width: 765px){ 
    ::before{
      display: none;
    }
  }
  &:active::before, &:hover::before, &:visited::before{
  opacity: 1;
  }
`
const ListDiv = styled.div`
  ${tw `flex self-center absolute lg:static hidden lg:block w-full`} 
  margin-left: 2rem;
  height: fit-content;
  
  @media screen and (max-width: 765px){
  top: 4rem;
  margin-left: 0;
  }
`
const ListWrapper = styled.u`
  ${tw`flex-col lg:block flex w-full`}
  text-decoration: none;
`

const LogoWrapper = styled.div`
  ${tw`container relative`}
  width: 5rem;
`

const MenuIconWrapper = styled.div`
  ${tw`md:visible py-3 sm:visible lg:hidden`}
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
`

const MenuHamburgerIcon = styled.div`
  ${tw``} 
  background: white;
  margin: 6px 12px;
  width: 20px;
  height: 2px;
`

const ImageContainer = styled.img`
  ${tw`w-full absolute`}
  top: 18px;
  left: 18px;
  z-index: 1;
`
const ImageWrapper = styled.div`
    ${tw`overflow-hidden`}
    width: 22vw;
    height: 27vw;
    background: grey;
    
`

const DropDownWrapper = styled.div`
  ${tw`w-full absolute hidden`}
  top: 64px;
  height: fit-content;
  background: white;
  
  > div{
    padding-bottom: 4rem;
  }
  
`

const toggleDropDown = (name) =>{
  let el = document.getElementById(name);
  if(typeof(window) !== 'undefined' && window.innerWidth > 775){
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }
}

const menuToggle = () =>{
  let navBarList = document.getElementById("nav-bar-list");

  if(navBarList.classList.contains('show-navigation')){
    navBarList.classList.add('hide-navigation','slide-in');
    navBarList.classList.remove('show-navigation','slide-out');
  }
  else{
    navBarList.classList.remove('hide-navigation','slide-in');
    navBarList.classList.add('show-navigation','slide-out');
  }
};

const NavBar = () => (

  <>
    <Nav>
      <LogoWrapper>
        <Link to="/" >
          <ImageContainer src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <MenuIconWrapper id="menu-icon" onClick={()=>{menuToggle()}}>
        <MenuHamburgerIcon />
        <MenuHamburgerIcon />
        <MenuHamburgerIcon />
      </MenuIconWrapper>
      <ListDiv id="nav-bar-list" className="nav-bar-list">
        <ListWrapper>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('about-us');
            }}>About US</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Admissions</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('academics');
            }}>Academics</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('academics');
            }}>Achievements</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Placements</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('department');
            }}>Department</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>LIFE@IMSEC</NavLink>
          </ListItem>
        </ListWrapper>
      </ListDiv>
      <DropDownWrapper id="about-us" className="hide-drop-down">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-4">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0"  titleClassName="text-lg xl:text-2xl" width="16vw" fontWeight="400" content="IMS Society" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" fontWeight="400" titleClassName="text-lg xl:text-2xl" width="16vw" content="Executive Council" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="16vw" titleClassName="text-lg xl:text-2xl" content="Governing Council" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="16vw" content="The Chairman" titleClassName="text-lg xl:text-2xl" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="16vw" content="The Director" titleClassName="text-lg xl:text-2xl" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="16vw" titleClassName="text-lg xl:text-2xl" content="Mission & Vision" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="16vw" titleClassName="text-lg xl:text-2xl" content="Location" padding="0.5rem"/>
          </div>
          <div className="right-dropDown w-full flex justify-around">
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
          </div>
        </div>
      </DropDownWrapper>
      <DropDownWrapper id="academics" className="hide-drop-down">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-4">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" width="16vw" titleClassName="text-lg xl:text-2xl" fontWeight="400" content="Course" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" fontWeight="400" titleClassName="text-lg xl:text-2xl" width="16vw" content="Faculty" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" titleClassName="text-lg xl:text-2xl" width="16vw" content="Success Story" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" titleClassName="text-lg xl:text-2xl" width="16vw" content="Academic" padding="1rem"/>
          </div>
          <div className="right-dropDown w-full flex justify-around">
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
          </div>
        </div>
      </DropDownWrapper>
      <DropDownWrapper id="department" className="hide-drop-down">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-8">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" width="16vw" fontWeight="600" titleClassName="text-lg xl:text-xl" content="B.Tech" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" fontWeight="400" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Civil Engineering" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Computer Science & Engineering" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Electrical & Electronics Engineering" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Electrical & Communication Engineering" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Information Technology" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Mechanical Engineering" padding="0.5rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="0.8vw 1vw 0 0" color="#0d266c" width="32vw" titleClassName="text-sm xl:text-xl" content="Department of Applied Science & Humanity" padding="0.5rem"/>
          </div>
          <div className="right-dropDown px-8 w-full flex-col justify-between">
            <div className="flex-col my-2">
              <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0.8vw 1vw 0 0" width="100%" fontWeight="600" titleClassName="text-lg xl:text-xl" content="Post Graduate" padding="0.5rem 0"/>
              <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="0" width="100%" fontWeight="400" titleClassName="text-sm xl:text-xl" content="Department of Master of Business Administration" padding="0.5rem 0"/>
            </div>
            <div className="flex justify-around">
              <ImageWrapper className="about-us-drop-down-image" />
              <ImageWrapper className="about-us-drop-down-image" />
            </div>
          </div>
        </div>
      </DropDownWrapper>
    </Nav>
  </>
);

export default NavBar
