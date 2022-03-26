import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='navbar-brand' to="/">Wise<span>tr</span></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navabar_"
                    >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/blog">Blogs</Link>
                        <Link className="nav-link" to="/faq">Faq</Link>
                    </Nav>
                    <Form className="d-flex header_contact">
                        <a className='blg' href="https://wisetr.com/contact/"><BiMailSend /> Contact</a>
                        <a href="tel:+113023307711"><BiPhoneCall /> +1 (130) 2330-7711</a>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header