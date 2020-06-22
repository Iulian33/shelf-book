// @flow
import React from "react";
import styled from "styled-components";
import { Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { changeThemeAction } from "redux/modules/app";

const FooterContainer = styled.footer`
  ${({darkMode}) =>
    `background: ${darkMode ? '#252525' : '#eaf3f7'};
     color: ${darkMode ? '#cacaca' : '#000'};
  `};
  padding: 30px 0 20px;
`;

const Switcher = styled(Form.Check)`
  float: right;
  label {
    &:before,
    &:after {
      margin-top: -4px;
    }
  }
`;

type State = {
    dispatch: ({ type: string }) => void,
    darkMode: boolean,
}

const Footer = ({dispatch, darkMode}:State) => {

    const onDarkModeAction = () => {
        dispatch(changeThemeAction(!darkMode));
    };

    return (
        <FooterContainer darkMode={darkMode}>
            <Container>
                <Row>
                    <Col sm={6}>@Copyright 2020</Col>
                    <Col sm={6}>
                        <Form>
                            <Switcher
                                custom
                                name="theme-mode"
                                onChange={onDarkModeAction}
                                checked={darkMode}
                                type="switch"
                                id="theme-switch"
                                label="Dark Mode"
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );
};

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode,
});

export default connect(mapStateToProps)(Footer);
