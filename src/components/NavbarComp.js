import React, { Component } from 'react'
import { Navbar, Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
import '../components/NavbarComp.css'
import { IoIosHome } from 'react-icons/io';
import { AiFillFilter } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import '../components/signup.css'
import CO from './Courses/CO';
import FYC from './FilterA/FYC';
import Home from './Home';
import Signup from './signup';
import ME from './Courses/ME';
import CE from './Courses/CE';
import IT from './Courses/IT';
import ElC from './Courses/ElC';
import Automobile from './Courses/Automobile';
import Electrical from './Courses/Electrical';
import Leather from './Courses/Leather';
import Rubber from './Courses/Rubber';
import Chemical from './Courses/Chemical';
import Instrumentation from './Courses/Instrumentation';
import Tele from './Courses/Tele';
import About from './About';
import Cart from './Cart/Cart'
import Profile from './Profile/Profile';
import { useState } from 'react';



function NavbarComp(props) {
  const [cart,setCart]=useState([]);
   return (
    /*<header>*/
    <BrowserRouter>
      <div className="Nav">
        <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" className="toggle">
      <Container id='bg-color'>
        <Navbar.Brand href="#home" style={{fontFamily:"-moz-initial"}} className="Logo"><b>PolyVision</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to={"/"} className="Comp"><IoIosHome />Home</Nav.Link>
            <Nav.Link as={Link} to={"/FYC"} className="Comp"><AiFillFilter/>Find Your College</Nav.Link>
            <NavDropdown title=" Diploma Courses" id="basic-nav-dropdown" className="Comp">
              <NavDropdown.Item as={Link} to={"/CO"}>Computer Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/ME"}>Mechanical Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/CE"}>Civil Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/IT"}>Information Technology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/ElC"}>Electronic Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Chemical"}>Chemical Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Electrical"}>Electrical Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Tele"}>Electronics and Telecommunication Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Instrumentation"}>Instrumental Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Leather"}>Leather Technology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Rubber"}>Rubber Technology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Automobile"}>Automobile Engineering</NavDropdown.Item>
              
              </NavDropdown>
            <Nav.Link as={Link} to={"/About"} className="Comp" ><RiTeamFill/>About us</Nav.Link>
            
          
            </Nav>
            <Nav className='mr-auto'>
          {/* <button type="button" className="Sbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign up</button> */}
          <Nav.Link className='cButton' as={Link} to={"/Cart"}>
          <div type="button" className="Sbtn" >Fav {cart.length}
          </div>
          </Nav.Link>
         </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content form-box">
              <div className="modal-header">
                <h1 className="login-text">Sign In</h1>
              </div>
              <div className="modal-body login-form">
                <form>
                  <div className="mb-3">
                    <label className='l'>Username</label>
                    <br></br>
                    <input type="text" name="username" className="login-box " />
                  </div>
                  <div className="mb-3">
                    <label className='l'>Password</label>
                    <br></br>
                    <input type="password" name="password" className="login-box" />
                  </div>
                  <div className="mb-3">
                  <button className="login-btn" >LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div>
      <Routes>
      <Route path="/FYC" element={<FYC cart={cart} setCart={setCart}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/CO" element={<CO/>}/>
      <Route path="/ME" element={<ME/>}/>
      <Route path="/CE" element={<CE/>}/>
      <Route path="/IT" element={<IT/>}/>
      <Route path="/ElC" element={<ElC/>}/>
      <Route path="/Automobile" element={<Automobile/>}/>
      <Route path="/Chemical" element={<Chemical/>}/>
      <Route path="/Electrical" element={<Electrical/>}/>
      <Route path="/Tele" element={<Tele/>}/>
      <Route path="/Instrumentation" element={<Instrumentation/>}/>
      <Route path="/Leather" element={<Leather/>}/>
      <Route path="/Rubber" element={<Rubber/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      
      </Routes>
      </div>
      </BrowserRouter>
      /*</header>*/
      
    )
  }
  export default NavbarComp;

