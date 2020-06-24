// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button, Col, Row } from "react-bootstrap";
import BookPlaceholder from "assets/book-placeholder.png";
import { toggleModal } from "redux/modules/modal";
import { setSelectedBook } from "redux/modules/books";
import type { Book } from "redux/modules/books";
import { setOnReview } from "redux/modules/app";

const BookContainer = styled.div`
  ${({darkMode}) =>
    `background: ${darkMode ? '#252525' : '#eaf3f7'};
     color: ${darkMode ? '#cacaca' : '#000'};
  `};
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

const ActionButton = styled(Button)`
  margin: 20px 10px 10px;
`;

const Column = styled(Col)`
  margin-top: 30px;
  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 0;    
  }
`;

type State = {
    dispatch: ({ type: string }) => void,
    book: Book,
    darkMode: boolean
}

const BookLayout = ({book, darkMode, dispatch}: State) => {
    const onMoreDetails = (book) => {
        dispatch(setSelectedBook(book));
        dispatch(toggleModal("bookDetails", true))
    };

    const onReview = (book) => {
        dispatch(setOnReview(book));
        dispatch(toggleModal("review", true))
    };

    return (
        <Column sm={6}>
            <BookContainer darkMode={darkMode}>
                <Row>
                    <Col sm={4}>
                        <BookImage src={book.thumbnailUrl || BookPlaceholder} alt="Book Image"/>
                    </Col>
                    <Col sm={8}>
                        <BTitle>{book.title}</BTitle>
                        <BDescription>{book.shortDescription}</BDescription>
                        <ActionButton variant="info" onClick={() => {
                            onMoreDetails(book)
                        }}>
                            More Details
                        </ActionButton>
                        <ActionButton variant={darkMode ? 'light' : 'dark'}
                                      onClick={() => {
                                          onReview(book)
                                      }}>
                            Review
                        </ActionButton>
                    </Col>
                </Row>
            </BookContainer>
        </Column>
    )
};

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode
});

export default connect(mapStateToProps)(BookLayout);
