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
                <div className='dropdown my-auto'>
                  <div
                    className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'
                    type='button'
                    id='dropdownMenu2'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    About us
                  </div>
                  <div
                    className='dropdown-menu dropdown-menu-right py-2 mt-2 shadow-sm bg-gray-50 bg-opacity-80 backdrop-filter backdrop-blur-md'
                    aria-labelledby='dropdownMenu2'
                  >
                    <button className='dropdown-item' type='button'>
                      Capital Profile
                    </button>
                    <button className='dropdown-item' type='button'>
                      Mission and Vision
                    </button>
                    <button className='dropdown-item' type='button'>
                      Board of Directors
                    </button>
                    <button className='dropdown-item' type='button'>
                      Management/Executive
                    </button>
                    <button className='dropdown-item' type='button'>
                      More
                    </button>
                  </div>
                </div>
                <div className='dropdown my-auto'>
                  <div
                    className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'
                    type='button'
                    id='dropdownMenu2'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Products & Services
                  </div>
                  <div
                    className='dropdown-menu dropdown-menu-right py-2 mt-2 shadow-sm bg-gray-50 bg-opacity-80 backdrop-filter backdrop-blur-md'
                    aria-labelledby='dropdownMenu2'
                  >
                    <button className='dropdown-item' type='button'>
                      Issue Management
                    </button>
                    <button className='dropdown-item' type='button'>
                      More
                    </button>
                  </div>
                </div>
                {/* <Nav.Link className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'> */}
                <div className='dropdown my-auto'>
                  <div
                    className='mx-3 px-0 text-black border-b-2 border-transparent hover:border-stone-400 my-auto'
                    type='button'
                    id='dropdownMenu2'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Become a Client
                  </div>
                  <div
                    className='dropdown-menu dropdown-menu-right py-2 mt-2 shadow-sm bg-gray-50 bg-opacity-80 backdrop-filter backdrop-blur-md'
                    aria-labelledby='dropdownMenu2'
                  >
                    <button className='dropdown-item' type='button'>
                      Bangladeshi Indivuals
                    </button>
                    <button className='dropdown-item' type='button'>
                      Bangladeshi Institutions
                    </button>
                    <button className='dropdown-item' type='button'>
                      Foreign Investor
                    </button>
                    <button className='dropdown-item' type='button'>
                      NRBs
                    </button>
                  </div>
                </div>
                {/* </Nav.Link> */}
              </Nav>
              <Nav>
                <Nav.Link className='flex items-center'>
                  <Nav.Link className='px-3 mr-2 font-semibold py-1 rounded-md hover:bg-opacity-30 my-2 md:my-0 text-black bg-slate-300 bg-opacity-50'>
                    Sign up
                  </Nav.Link>
                  <Nav.Link className='px-3 py-1 font-semibold rounded-md hover:bg-opacity-30 my-2 md:my-0 text-black bg-slate-300 bg-opacity-50'>
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
