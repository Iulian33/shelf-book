// @flow
import React from "react";
import { connect } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import type { Shelf } from "redux/modules/shelves";
import type { Book } from "redux/modules/books";
import { addBookToShelf } from "redux/modules/shelves";

type State = {
    dispatch: ({ type: string }) => void,
    shelves: Shelf[],
    selectedBook: Book
}

const AddToShelf = ({shelves, selectedBook, dispatch}: State) => {
    const onShelfSelected = (event) => {
        console.log(event.target.value);
        dispatch(addBookToShelf(selectedBook,event.target.value,event.target.checked))
        // event.target.checked = !event.target.checked;
    };

    const listShelves = () => {
        return shelves.map((shelf, idx) => {

           const selectedShelf = shelf.books.filter((book) => selectedBook.id === book.id);

            return (
                <ListGroup.Item key={idx}>
                    <Form.Check
                        custom
                        checked={!!selectedShelf.length}
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
        </Form>
    );
};

const mapStateToProps = ({shelves, books}) => ({
    shelves: shelves.allShelves,
    selectedBook: books.selectedBook
});

export default connect(mapStateToProps)(AddToShelf);
