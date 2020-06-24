// @flow
import React from "react";
import { connect } from "react-redux";
import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { toggleModal } from "redux/modules/modal";

const Container = styled(Col)`
  min-height: 400px;
`;

const NoShelvesMessage = styled.h2`
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: ${({darkMode}) => (darkMode ? '#fff' : '#000')};
`;

type State = {
    dispatch: ({ type: string }) => void,
    darkMode: boolean
}

const NoShelves = ({dispatch, darkMode}: State) => {
    const onAddShelve = () => {
        dispatch(toggleModal("newShelve", true))
    };

    return (
        <Container align={'center'}>
            <NoShelvesMessage darkMode={darkMode}>
                Shelves list is empty <br/>
                Add your firs shelf !
            </NoShelvesMessage>
            <Button variant={darkMode ? 'light' : 'dark'}
                    onClick={onAddShelve}>
                New Shelf
            </Button>
        </Container>
    );
};

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode
});

export default connect(mapStateToProps)(NoShelves);
