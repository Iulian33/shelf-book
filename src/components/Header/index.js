// @flow
import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleModal } from "redux/modules/modal";

const AppNav = styled(Navbar)`
  background: #eaf3f7;  
  padding: 15px 30px;
`;


type Props = {
    dispatch: ({ type: string }) => void
};

const Header = ({dispatch}:Props) => {

    const onAddBook = () => {dispatch(toggleModal("newBook", true))};
    const onAddShelve = () => {dispatch(toggleModal("newShelve", true))};

    const onLoadBooks = () => {
        alert('load Books');
    };

    const onLoadShelves = () => {
        alert('load Shelves');
    };

    return (
        <AppNav expand="lg">
            <Navbar.Brand>Shelf Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link onClick={onLoadBooks}>All Books</Nav.Link>
                    <NavDropdown title="Shelves">
                        <NavDropdown.Item onClick={onLoadShelves}>All Shelves</NavDropdown.Item>
                        <NavDropdown.Item onClick={onAddShelve}>Add Shelf</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="primary" onClick={onAddBook}>Add New Book</Button>
            </Navbar.Collapse>
        </AppNav>
    );
};

export default connect()(Header);
