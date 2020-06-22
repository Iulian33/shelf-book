// @flow
import React from "react";
import { Container } from "react-bootstrap";
import Books from "components/Main/Books";
import styled from "styled-components";
import { connect } from "react-redux";


const MainTitle = styled.h1`
  font-size: 38px;
  text-align: center;
  padding: 45px 0;
  color: ${({ darkMode }) => (darkMode ? '#cacaca' : '#000')};
`;

const MainContainer = styled(Container)`
  padding: 10px 0 80px;
`;

type State = {
    darkMode: boolean
}

const Main = ({darkMode}:State) => (
    <MainContainer>
        <MainTitle darkMode={darkMode}>All Books</MainTitle>
        <Books/>
    </MainContainer>
);


const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode,
});

export default connect(mapStateToProps)(Main);
