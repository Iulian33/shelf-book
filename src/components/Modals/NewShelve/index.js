// @flow
import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { toggleModal } from "redux/modules/modal";

type State = {
    dispatch: ({ type: string }) => void,
    isOpen: boolean
}

const NewShelveModal = ({dispatch, isOpen}: State) => {
    const handleClose = () => {dispatch(toggleModal('newShelve',false))};

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Shelf</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Shelf
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = ({modal}) => ({
    isOpen: modal.newShelve
});

export default connect(mapStateToProps)(NewShelveModal);
