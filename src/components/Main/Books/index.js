// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Col, Row } from "react-bootstrap";
import BookPlaceholder from "assets/book-placeholder.png";
import { toggleModal } from "redux/modules/modal";
import { setSelectedBook } from "redux/modules/books";

const BookContainer = styled.div`
  background: #eaf3f7;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
  padding: 15px 30px;
  display: inline-block;
  width: 100%;
  border-radius: 8px;
  min-height: 200px;
`;

const BTitle = styled.h3`
  font-size: 25px;
  padding: 5px 0 15px;
`;

const BDescription = styled.p`
  line-height: 25px;
  height: 100px;
  overflow: hidden;
`;

const BookImage = styled.img`
  width: 100%;
  margin-top: 10px;
`;

const MoreDetails = styled(Button)`
  margin: 20px 0 10px;
`;

const Column = styled(Col)`
  margin-top: 30px;
  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 0;    
  }
`;

export interface Book {
    id: number,
    title: string,
    isbn: string,
    pageCount: number,
    publishedDate: Object,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[]
}

type State = {
    dispatch: ({ type: string }) => void,
    books: Book[];
}

const Books = ({books, dispatch}: State) => {

    const onMoreDetails = (book: Book) => {
        dispatch(setSelectedBook(book));
        dispatch(toggleModal("bookDetails", true))
    };

    const listBooks = (books: Book[]) => books.map((book, index) => {
        return (
            <Column sm={6} key={index}>
                <BookContainer>
                    <Row>
                        <Col sm={4}>
                            <BookImage src={book.thumbnailUrl || BookPlaceholder} alt="Book Image"/>
                        </Col>
                        <Col sm={8}>
                            <BTitle>{book.title}</BTitle>
                            <BDescription>{book.shortDescription}</BDescription>
                            <MoreDetails variant="info" onClick={() => {
                                onMoreDetails(book)
                            }}>More Details</MoreDetails>
                        </Col>
                    </Row>
                </BookContainer>
            </Column>
        )
    });

    return (
        <Row>{listBooks(books)}</Row>
    );
};

const mapStateToProps = ({books}) => ({
    books: books.allBooks
});

export default connect(mapStateToProps)(Books);
