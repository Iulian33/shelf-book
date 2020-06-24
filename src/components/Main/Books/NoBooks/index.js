// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const NoBooksMessage = styled.h2`
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: ${({darkMode}) => (darkMode ? '#fff' : '#000')};
`;

type State = {
    darkMode: boolean
}

const NoBooks = ({darkMode}: State) => (
    <Col align={'center'}>
        <NoBooksMessage darkMode={darkMode}>
            No Books Available
        </NoBooksMessage>
    </Col>
);

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode
});

export default connect(mapStateToProps)(NoBooks);
