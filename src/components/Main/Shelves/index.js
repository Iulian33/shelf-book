// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Badge, Button, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import type { Shelf } from "redux/modules/shelves";
import NoShelves from "components/Main/Shelves/NoShelves";
import AddBooks from "components/Main/Shelves/AddBooks";
import { selectShelf } from "redux/modules/shelves";
import { changeMainLoadAction, setOnReview } from "redux/modules/app";
import { toggleModal } from "redux/modules/modal";
import Icon from "components/Icon";

const ShelfContainer = styled.div`
  ${({darkMode}) =>
    `background: ${darkMode ? '#252525' : '#eaf3f7'};
     color: ${darkMode ? '#cacaca' : '#000'};
  `};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
  padding: 25px 30px;
  display: inline-block;
  width: 100%;
  border-radius: 8px;
`;

const Column = styled(Col)`
  margin-top: 30px;
  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 0;    
  }
`;

const IconContainer = styled.span`
  position: relative;
  left: -5px;
`;

const Category = styled(Col)`
  text-align: right;
  font-size: 18px;
  span {
    color: #2b9c44;
    font-weight: bold;
  }
`;

const ShelfName = styled.h4`
  font-size: 22px;
  margin: 0;
`;

const Action = styled(Col)`
  padding-top: 15px;
  button {
    margin-right: 15px;
  }
`;

const PopoverBody = styled(Popover.Content)`
  padding: 0;
`;

const BooksCount = styled(Col)`
  padding-top: 15px;
`;

type State = {
    dispatch: ({ type: string }) => void,
    shelves: Shelf[],
    darkMode: boolean
}

const Shelves = ({shelves, dispatch, darkMode}: State) => {
    const onShelfSelected = (shelf: Shelf) => {
        dispatch(selectShelf(shelf));
        dispatch(changeMainLoadAction('shelfBooks'));
    };

    const onReviewShelf = (shelf: Shelf) => {
        dispatch(setOnReview(shelf));
        dispatch(toggleModal("review", true))
    };

    const listShelves = (shelves: Shelf[]) => shelves.map((shelf, index) => {
        return (
            <Column sm={6} key={`shelf-${index}`}>
                <ShelfContainer darkMode={darkMode}>
                    <Row>
                        <Col sm={6}>
                            <ShelfName>{shelf.name}</ShelfName>
                        </Col>
                        <Category sm={6}>
                            <Icon name={'tag'}/>
                            <span> {shelf.category || 'No Category'}</span>
                        </Category>
                        <Action sm={6}>
                            <Button variant="info"
                                    onClick={() => {
                                        onShelfSelected(shelf)
                                    }}>
                                Load Shelf
                            </Button>
                            <Button variant={darkMode ? 'light' : 'dark'}
                                    onClick={() => {
                                        onReviewShelf(shelf)
                                    }}>
                                Review
                            </Button>
                        </Action>
                        <BooksCount sm={6} align={'right'}>
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                key="bottom"
                                placement="bottom"
                                overlay={(
                                    <Popover id={`popover-positioned-bottom`}>
                                        <Popover.Title as="h3">Add Books</Popover.Title>
                                        <PopoverBody><AddBooks selectedShelf={shelf}/></PopoverBody>
                                    </Popover>
                                )}>
                                <Button variant="primary">
                                    <IconContainer><Icon name='caretDown'/></IconContainer>
                                    Books <Badge variant="light">{shelf.books.length}</Badge>
                                </Button>
                            </OverlayTrigger>
                        </BooksCount>
                    </Row>
                </ShelfContainer>
            </Column>
        )
    });

    return (
        <Row>{shelves.length ? listShelves(shelves) : <NoShelves/>}</Row>
    );
};

const mapStateToProps = ({app, shelves}) => ({
    darkMode: app.darkMode,
    shelves: shelves.allShelves
});

export default connect(mapStateToProps)(Shelves);
