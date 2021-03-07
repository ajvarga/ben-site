import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/benHead.png';


const Styles = styled.div`
 .navbar {
     background-color: black;
     height: 50px;
 }
 .navbar-brand, .navbar-nav .nav-link {
     color: #bbb;
     font-size: 18px;

     &:hover {
         color: white;
     }
 }
`
// TODO make text bigger ben doesnt love the font make it comic sans i mean papyrus :3
class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <Styles>
                <Navbar expand='lg'>
                    <Navbar.Brand href='/'>
                        <img src={ logo } width='40' height='50'></img>
                          Ben Visini Music
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            {/* <Nav.Item>
                                <Nav.Link href='/music'>Music</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/sevenDay'>7-day Songs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/photos'>Photos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/events'>Events</Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Nav.Link href='/about'>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/contact'>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}
 
export default NavigationBar;