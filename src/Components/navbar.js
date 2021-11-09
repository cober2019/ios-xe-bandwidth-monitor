import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export  function Navigation(){
  
  return <Container fluid>
          <Row xl className="mt-3">
            <Navbar bg={'black'} expand={false} className="mb-3">
            
              <Navbar.Toggle aria-controls="offcanvasNavbar" style={{backgroundColor: 'white'}}/>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end">
                <Offcanvas.Header style={{ backgroundColor: '#868F80'}} closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: 'black'}}>XE-Ops Bandwdith Viewer</Offcanvas.Title>
                </Offcanvas.Header>
                <div className="border-bottom" style={{color: 'black'}}/>
                <Offcanvas.Body style={{backgroundColor: '#868F80'}}>
                  <Nav className="justify-content-end flex-grow-1 pe-3" >
                      <Link style={{color: 'black', fontWeight: 'bold'}} className="nav-link " to='/logout'>Logout</Link>
                      <p className="nav-link  disabledCursor" style={{color: 'black', fontWeight: 'bold'}}>Connection: {localStorage.getItem('ip')}</p>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              </Navbar>      
            </Row> 
          </Container>
       
  }
  