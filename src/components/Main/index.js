// @flow
import React from "react";
import { Container } from "react-bootstrap";
import Books from "components/Main/Books";
import styled from "styled-components";


const MainTitle = styled.h1`
  font-size: 38px;
  text-align: center;
  padding: 45px 0;
`;

const MainContainer = styled(Container)`
  padding: 10px 0 80px;
`;

const Main = () => (
    <MainContainer>
        <MainTitle>All Books</MainTitle>
        <Books/>
    </MainContainer>
);

export default Main;