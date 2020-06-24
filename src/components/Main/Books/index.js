// @flow
import React from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import type { Book } from "redux/modules/books";
import BookLayout from "components/Main/Books/BookLayout";

type State = {
    dispatch: ({ type: string }) => void,
    books: Book[],
}

const Books = ({books}: State) => {
    const listBooks = (books: Book[]) => books.map((book, index) => {
        return <BookLayout key={index} book={book} />
    });

    return (
        <Row>{listBooks(books)}</Row>
    );
};

const mapStateToProps = ({books}) => ({
    books: books.allBooks,
});

export default connect(mapStateToProps)(Books);
