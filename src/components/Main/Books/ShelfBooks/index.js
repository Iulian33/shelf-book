// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Col, Row } from "react-bootstrap";
import type { Book } from "redux/modules/books";
import type { Shelf } from "redux/modules/shelves";
import NoBooks from "components/Main/Books/NoBooks";
import { changeMainLoadAction } from "redux/modules/app";
import BookLayout from "components/Main/Books/BookLayout";

const BackButton = styled(Button)`
  margin-top: 30px;
`;

type State = {
    dispatch: ({ type: string }) => void,
    books: Book[],
    selectedShelf: Shelf,
}

const ShelfBooks = ({dispatch, books, selectedShelf}: State) => {

    const listShelfBooks = (books: Book[]) => {
        const shelfBooks = selectedShelf.books.map((bookId) => books.filter(book => book.id === bookId)[0]);
        return shelfBooks.length ? shelfBooks.map((book, index) => {
            return <BookLayout key={index} book={book} />
        }) : <NoBooks/>;
    };

    return (
        <Row>
            {listShelfBooks(books)}
            <Col xs={12}>
                <BackButton variant="primary" size="lg" block onClick={() => {
                    dispatch(changeMainLoadAction('allShelves'))
                }}>
                    Back to Shelves
                </BackButton>
            </Col>
        </Row>
    );
};

const mapStateToProps = ({ shelves, books}) => ({
    selectedShelf: shelves.selectedShelf,
    books: books.allBooks
});

export default connect(mapStateToProps)(ShelfBooks);
