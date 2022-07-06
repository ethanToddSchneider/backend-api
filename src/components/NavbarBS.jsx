import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export default class NavbarBS extends Component {
    render() {

        return (
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="Home.js">Online Shopping</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="Home.jsx">Home</Nav.Link>
                                <Nav.Link href="Products.jsx">Products</Nav.Link>
                                <Nav.Link href="Products.jsx">MEN</Nav.Link>
                                <Nav.Link href="#action3">WOMEN</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
