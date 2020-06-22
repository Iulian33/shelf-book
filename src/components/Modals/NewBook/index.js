// @flow
import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "redux/modules/modal";
import BaseModal from "components/Modals/Base";

type State = {
    dispatch: ({ type: string }) => void,
    isOpen: boolean
}

const NewBookModal = ({dispatch, isOpen}: State) => {
    const handleClose = () => {dispatch(toggleModal('newBook',false))};

    return (
        <BaseModal show={isOpen}
                   onHide={handleClose}
                   title='Add New Book'
                   close={handleClose}
                   action={handleClose}
                   actionTitle='Save Changes'>
            Add Book Body
        </BaseModal>
    );
};

const mapStateToProps = ({modal}) => ({
    isOpen: modal.newBook
});

export default connect(mapStateToProps)(NewBookModal);
