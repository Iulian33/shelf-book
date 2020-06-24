// @flow
import React from "react";
import { Container } from "react-bootstrap";
import Books from "components/Main/Books";
import styled from "styled-components";
import { connect } from "react-redux";
import Shelves from "components/Main/Shelves";
import ShelfBooks from "components/Main/Books/ShelfBooks";
import type { Shelf } from "redux/modules/shelves";


const MainTitle = styled.h1`
  font-size: 38px;
  text-align: center;
  padding: 45px 0;
  color: ${({darkMode}) => (darkMode ? '#cacaca' : '#000')};
`;

const MainContainer = styled(Container)`
  padding: 10px 0 80px;
  min-height: 650px;
`;

type State = {
    darkMode: boolean,
    mainLoad: string,
    selectedShelf: Shelf
}

const Main = ({darkMode, mainLoad, selectedShelf}: State) => (
    <MainContainer>
        {mainLoad === 'allBooks' && (
            <>
                <MainTitle darkMode={darkMode}>All Books</MainTitle>
                <Books/>
            </>
        )}
        {mainLoad === 'shelfBooks' && (
            <>
                <MainTitle darkMode={darkMode}>
                    All Books from {selectedShelf.name}
                </MainTitle>
                <ShelfBooks/>
            </>
        )}
        {mainLoad === 'allShelves' && (
            <>
                <MainTitle darkMode={darkMode}>All Shelves</MainTitle>
                <Shelves/>
            </>
        )}
    </MainContainer>
);

const mapStateToProps = ({app, shelves}) => ({
    darkMode: app.darkMode,
    mainLoad: app.mainLoad,
    selectedShelf: shelves.selectedShelf
});

export default connect(mapStateToProps)(Main);
