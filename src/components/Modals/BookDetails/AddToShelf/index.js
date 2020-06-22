// @flow
import React from "react";
import { connect } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import type { Shelf } from "redux/modules/shelves";


type State = {
    dispatch: ({ type: string }) => void,
    shelves: Shelf[]
}

const AddToShelf = ({dispatch, shelves}: State) => {

    console.log(shelves);

    const listShelves = () => {
        return shelves.map((shelf, idx) => (
            <ListGroup.Item>
                <Form.Check
                    custom
                    type="checkbox"
                    id={`${idx}-checkbox`}
                    label={shelf.name}
                />
            </ListGroup.Item>
        ));
    };

    return (
        <Form>
            <ListGroup variant="flush">
                {listShelves()}
            </ListGroup>
        </Form>
    );
};

const mapStateToProps = ({shelves}) => ({
    shelves: shelves.allShelves
});

export default connect(mapStateToProps)(AddToShelf);
