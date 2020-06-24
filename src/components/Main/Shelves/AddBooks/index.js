// @flow
import React from "react";
import { connect } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import type { Book } from "redux/modules/books";
import type { Shelf } from "redux/modules/shelves";
import { toggleBookToShelf } from "redux/modules/shelves";

const BooksList = styled(Form)`
  max-height: 300px;
  overflow: auto;
`;

type State = {
    dispatch: ({ type: string }) => void,
    books: Book[],
    selectedShelf: Shelf
}

const AddBooks = ({books, dispatch,selectedShelf}: State) => {
    const onBookSelected = (event, book) => {
        dispatch(toggleBookToShelf(
            book.id,
            selectedShelf.name,
            event.target.checked
        ));
    };

    const isBookAvailable = (shelfCategory, selectedBookCategories) => {
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
        return books.map((book, idx) => {
            const selectedBook = selectedShelf.books.filter(bookId => bookId === book.id);
            return (
                <ListGroup.Item key={idx}>
                    <Form.Check
                        custom
                        checked={!!selectedBook.length}
                        disabled={!isBookAvailable(selectedShelf.category, book.categories)}
                        onChange={(event) => {onBookSelected(event,book)}}
                        type="checkbox"
                        value={book.title}
                        label={book.title}
                        id={`${idx}-checkbox`}
                    />
                </ListGroup.Item>
            )
        });
    };

    return (
        <BooksList>
            <ListGroup variant="flush">
                {listShelves()}
            </ListGroup>
        </BooksList>
    );
};

const mapStateToProps = ({books}) => ({
    books: books.allBooks
});

export default connect(mapStateToProps)(AddBooks);
