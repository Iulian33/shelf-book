// @flow
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleModal } from "redux/modules/modal";
import { changeMainLoadAction } from "redux/modules/app";

const AppNav = styled(({ darkMode, ...rest }) => <Navbar {...rest} />)`
  background: ${({darkMode}) => (darkMode ? '#252525' : '#eaf3f7')};
  padding: 15px 30px;
  .navbar-brand,
  .nav-link {
    color: ${({darkMode}) => (darkMode ? '#cacaca' : '#000')} !important;
  }
`;

type Props = {
    dispatch: ({ type: string }) => void,
    darkMode: boolean
};

const Header = ({dispatch, darkMode}: Props) => {
    const onAddShelve = () => {
        dispatch(toggleModal("newShelve", true))
    };
    const onLoadBooks = () => {
        dispatch(changeMainLoadAction('allBooks'));
    };
    const onLoadShelves = () => {
        dispatch(changeMainLoadAction('allShelves'));
    };

    return (
        <AppNav expand="lg" darkMode={darkMode}>
            <Navbar.Brand>Shelf Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link onClick={onLoadBooks}>All Books</Nav.Link>
                    <Nav.Link onClick={onLoadShelves}>All Shelves</Nav.Link>
                </Nav>
                <Button variant="primary" onClick={onAddShelve}>Add Shelf</Button>
            </Navbar.Collapse>
        </AppNav>
    );
};

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode,
});

export default connect(mapStateToProps)(Header);
