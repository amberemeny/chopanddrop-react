import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Navbar.Brand href="/">Chop and Drop Tree Lop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/faq">F.A.Q.</Nav.Link>
                        <Nav.Item className="text-secondary text-center">0400 000 000</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}