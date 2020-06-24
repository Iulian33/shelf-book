// @flow
import React from "react";
import { connect } from "react-redux";
import { Col, Form } from "react-bootstrap";
import { toggleModal } from "redux/modules/modal";
import styled from "styled-components";
import BaseModal from "components/Modals/Base";
import type { Shelf } from "redux/modules/shelves";
import { addShelf } from "redux/modules/shelves";
import { changeMainLoadAction } from "redux/modules/app";

const FormLine = styled(Form.Row)`
  margin: 15px 0;
`;

type State = {
    dispatch: ({ type: string }) => void,
    isOpen: boolean,
    categories: string[],
    shelves: Shelf[]
}

const NewShelfModal = ({dispatch, isOpen, categories, shelves}: State) => {
    const newShelf: Shelf = {};
    const handleClose = () => {
        dispatch(toggleModal('newShelve', false))
    };

    const onTypeName = (event) => {
        newShelf.name = event.target.value;
    };

    const onCategorySelect = (event) => {
        newShelf.category = event.target.value;
    };

    const onAddShelf = (shelf: Shelf) => {
        const isShelfSore = shelves.filter((storeShelf) => {
            return shelf.name === storeShelf.name
        });
        if (shelf.name && !isShelfSore.length) {
            shelf.books = [];
            dispatch(addShelf(shelf));
            dispatch(toggleModal('newShelve', false));
            dispatch(changeMainLoadAction('allShelves'));
        }
    };

    const listCategories = categories => {
        return categories.map((category, idx) => (
            <option key={`option-${idx}`}>{category}</option>
        ));
    };

    return (
        <BaseModal show={isOpen}
                   onHide={handleClose}
                   close={handleClose}
                   title='Add Shelf'
                   action={() => {
                       onAddShelf(newShelf)
                   }}
                   actionTitle='Add Shelf'>
            <Form>
                <Form.Group>
                    <FormLine>
                        <Col><Form.Control type="text" placeholder="Shelf Name" onKeyUp={onTypeName}/></Col>
                    </FormLine>
                    <FormLine>
                        <Col>
                            <Form.Control as="select" onChange={onCategorySelect} custom>
                                <option key={'n/a'}>No Category</option>
                                {listCategories(categories)}
                            </Form.Control>
                        </Col>
                    </FormLine>
                </Form.Group>
            </Form>
        </BaseModal>
    );
};

const mapStateToProps = ({modal, categories, shelves}) => ({
    isOpen: modal.newShelve,
    categories: categories.allCategories,
    shelves: shelves.allShelves
});

export default connect(mapStateToProps)(NewShelfModal);
