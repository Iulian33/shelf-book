// @flow
import React from "react";
import { connect } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import type { Shelf } from "redux/modules/shelves";
import type { Book } from "redux/modules/books";
import { toggleBookToShelf } from "redux/modules/shelves";

const NoShelfMessage = styled.p`
  font-weight: bold;
`;

type State = {
    dispatch: ({ type: string }) => void,
    shelves: Shelf[],
    selectedBook: Book
}

const AddToShelf = ({shelves, selectedBook, dispatch}: State) => {
    const onShelfSelected = (event) => {
        dispatch(toggleBookToShelf(
            selectedBook.id,
            event.target.value,
            event.target.checked
        ));
    };

    const isShelfAvailable = (shelfCategory, selectedBookCategories) => {
        let isAvailable: boolean;
        if (shelfCategory && shelfCategory !== 'No Category') {
            const categories = selectedBookCategories.filter((category) => shelfCategory === category);
            isAvailable = !!categories.length;
        } else {
            isAvailable = true;
        }
        return isAvailable;
    };

    const listShelves = () => {
        return shelves.map((shelf, idx) => {
            const selectedShelf = shelf.books.filter((bookId) => selectedBook.id === bookId);
            return (
                <ListGroup.Item key={idx}>
                    <Form.Check
                        custom
                        checked={!!selectedShelf.length}
                        disabled={!isShelfAvailable(shelf.category, selectedBook.categories)}
                        onChange={onShelfSelected}
                        type="checkbox"
                        value={shelf.name}
                        label={shelf.name}
                        id={`${idx}-checkbox`}
                    />
                </ListGroup.Item>
            )
        });
    };

    return (
        <Form>
            <ListGroup variant="flush">
                {listShelves()}
            </ListGroup>
            {!shelves.length && <NoShelfMessage>No shelves added yet!</NoShelfMessage>}
        </Form>
    );
};

const mapStateToProps = ({shelves, books}) => ({
    shelves: shelves.allShelves,
    selectedBook: books.selectedBook
});

export default connect(mapStateToProps)(AddToShelf);
