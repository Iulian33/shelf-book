// @flow
import React from "react";
import { connect } from "react-redux";
import { Col, Form, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import BaseModal from "components/Modals/Base";
import type { Book, Review } from "redux/modules/books";
import { toggleModal } from "redux/modules/modal";
import { addBookReview } from "redux/modules/books";
import type { Shelf } from "redux/modules/shelves";
import { addShelfReview } from "redux/modules/shelves";

const Reviewer = styled.h3`
  font-weight: bold;
`;

const ReviewBlock = styled(({ darkMode, ...rest }) => <Row {...rest} />)`
  padding: 15px 0;
  h3,p {
    color: ${({darkMode}) => (darkMode ? '#fff' : '#000')};  
  }
`;

const NameControl = styled(Form.Control)`
  margin-bottom: 10px;
`;

const ListItem = styled(ListGroup.Item)`
  background: transparent;
`;

const NoReviewMessage = styled.p`
  font-size: 22px;
  padding: 15px 15px 20px;
`;

type State = {
    dispatch: ({ type: string }) => void,
    onReview: Shelf | Book,
    isOpen: boolean,
    darkMode: boolean
}

const ReviewModal = ({dispatch, isOpen, onReview, darkMode}: State) => {
    const newReview: Review = {};

    const handleClose = () => {
        dispatch(toggleModal('review', false))
    };

    const onAddReview = () => {
        if (newReview.name && newReview.message) {
            dispatch(onReview.id
                ? addBookReview(newReview.name, newReview.message, onReview.id)
                : addShelfReview(newReview.name, newReview.message, onReview.name)
            );
            document.getElementById("review-form").reset();
        }
    };

    const listReviews = () => Object.keys(onReview).length && (
        onReview.reviews.length ? onReview.reviews.map((review: Review, idx) => (
            <ListItem key={idx}>
                <ReviewBlock darkMode={darkMode}>
                    <Col sm={3}>
                        <Reviewer>{review.name}</Reviewer>
                    </Col>
                    <Col sm={9}>
                        <p>{review.message}</p>
                    </Col>
                </ReviewBlock>
            </ListItem>
        )) : <NoReviewMessage> No Reviews ! </NoReviewMessage>
    );

    return (
        <BaseModal show={isOpen}
                   onHide={handleClose}
                   title={`Review "${onReview.title || onReview.name}" `}
                   close={handleClose}
                   action={onAddReview}
                   actionTitle={`Add Review`}>
            <ListGroup variant="flush">
                {listReviews()}
                <Form id="review-form" onSubmit={(e) => {e.preventDefault()}}>
                    <Form.Row>
                        <Col>
                            <NameControl placeholder="Name"
                                         value={newReview.name}
                                         onKeyUp={(e) => {
                                             newReview.name = e.target.value
                                         }}
                            />
                            <Form.Control as="textarea"
                                          placeholder="Review..." rows="3"
                                          value={newReview.message}
                                          onKeyUp={(e) => {
                                              newReview.message = e.target.value
                                          }}
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </ListGroup>
        </BaseModal>
    );
};

const mapStateToProps = ({modal, app}) => ({
    isOpen: modal.review,
    onReview: app.onReview,
    darkMode: app.darkMode
});

export default connect(mapStateToProps)(ReviewModal);
