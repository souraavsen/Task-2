import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../asstes/Images/logo.png";

const NavSection = () => {
  return (
    <div>
      <div className='sticky top-0 z-50'>
        <Navbar
          className='bg-gray-50 bg-opacity-70 backdrop-filter backdrop-blur-md'
          expand='lg'
        >
          <Container>
            <Navbar.Brand className='mx-auto flex justify-center items-center'>
              <Nav.Link to='/' className='text-2xl flex items-center'>
                <img className='w-40' src={logo} alt='' />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              className='flex flex-col md:flex-row justify-center items-center pb-2'
              id='basic-navbar-nav'
            >
              <Nav className='mx-auto flex flex-col md:flex-row justify-center items-start'>
                <Nav.Link className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'>
                  Home
                </Nav.Link>
                <Nav.Link className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'>
                  Products & Services
                </Nav.Link>
                <Nav.Link className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'>
                  Become a Client
                </Nav.Link>
                <Nav.Link className='ml-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'>
                  About us
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className='flex items-center'>
                  <Nav.Link className='px-3 mr-2 font-semibold py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-black bg-slate-300 bg-opacity-50'>
                    Sign up
                  </Nav.Link>
                  <Nav.Link className='px-3 py-1 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-black bg-slate-300 bg-opacity-50'>
                    Sign in
                  </Nav.Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavSection;
