// @flow
import React from "react";
import { connect } from "react-redux";
import { Badge, Col, Row } from "react-bootstrap";
import { toggleModal } from "redux/modules/modal";
import BookPlaceholder from "assets/book-placeholder.png";
import styled from "styled-components";
import Icon from "components/Icon";
import AddToShelf from "./AddToShelf";
import BaseModal from "components/Modals/Base";
import type { Book } from "redux/modules/books";

const BookImage = styled.img`
  width: 100%;
  margin-top: 10px;
`;

const BookBadge = styled(Badge)`
  font-size: 18px;
  margin: 10px 8px 10px 0;
`;

const Authors = styled.div`
  font-weight: bold;
  margin: 10px 0;
   span {
    color: #757575;
  }
`;

const BDescription = styled.p`
  line-height: 25px;
`;

const CategoriesContainer = styled.div`
  padding: 10px 0;
  span {
    color: #2b9c44;
    font-weight: bold;
  }
`;

type State = {
    dispatch: ({ type: string }) => void,
    isOpen: boolean,
    book: Book
}

const BookDetailsModal = ({dispatch, isOpen, book}: State) => {

    const handleClose = () => {
        dispatch(toggleModal('bookDetails', false))
    };

    return (
        <BaseModal show={isOpen}
                   onHide={handleClose}
                   size="lg"
                   title={book.title}
                   popOver={true}
                   popoverComponent={<AddToShelf/>}
                   popOverTitle={'Add Book to Shelf'}
                   close={handleClose}
                   actionTitle='Add to Shelve'>
            {Object.keys(book).length && (
                <Row>
                    <Col sm={3}>
                        <BookImage src={book.thumbnailUrl || BookPlaceholder} alt="Book Image"/>
                    </Col>
                    <Col sm={9}>
                        <BookBadge variant="warning">ISBN: {book.isbn}</BookBadge>
                        <BookBadge variant="primary">{book.pageCount} Pages</BookBadge>
                        <Authors>
                            Authors: <span> {book.authors.map((author, i) => book.authors.length === i + 1 ? author : author + ', ')}</span>
                        </Authors>
                        <BDescription>{book.longDescription}</BDescription>
                        <CategoriesContainer>
                            <Icon name={'tag'}/>
                            <span> {book.categories.map((category, i) => book.categories.length === i + 1 ? category : category + ', ')}</span>
                        </CategoriesContainer>
                    </Col>
                </Row>
            )}
        </BaseModal>
    );
};

const mapStateToProps = ({modal, books}) => ({
    isOpen: modal.bookDetails,
    book: books.selectedBook
});

export default connect(mapStateToProps)(BookDetailsModal);
