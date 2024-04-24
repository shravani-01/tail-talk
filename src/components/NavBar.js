import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import '../App.css';
;

export default function App() {
  const [openNavRight, setOpenNavRight] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MDBNavbar expand='lg' light={!scrolling} bgColor={scrolling ? 'dark' : 'transparent'} fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand active aria-current='page' href='#' style={{ color: scrolling ? 'white' : 'white' }}>
          {/* <img src={logo} alt="Logo" height="30" /> */}
          <i class="fa-solid fa-paw fa-0.5x" ></i>
           
          Tail Talk
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse  navbar open={openNavRight}>
        <MDBNavbarNav style={{ marginLeft: 'auto', flexDirection: 'row' }} fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk' active aria-current='page'  style={{ color: scrolling ? 'white' : 'white' }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/AI' active aria-current='page'  style={{ color: scrolling ? 'white' : 'white' }}>
                Try our AI
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/data' style={{ color: scrolling ? 'white' : 'white' }}>
                Data
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' style={{ color: scrolling ? 'white' : 'white' }} className='nav-link' role='button' >
                  Approach
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/tail-talk/#/LLM'>LLMs</MDBDropdownItem>
                  <MDBDropdownItem link href='/tail-talk/#/RAG'>RAG</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/Analysis' style={{ color: scrolling ? 'white' : 'white' }}>
                Analysis
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/Team' style={{ color: scrolling ? 'white' : 'white' }}>
                Team
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
