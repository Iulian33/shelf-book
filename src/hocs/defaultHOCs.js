// @flow
import React from "react";
import { connect } from "react-redux";
import { getBooks } from "redux/modules/books";
import books from "books.json"

type Props = {
    dispatch: ({ type: string }) => void
};

const defaultHOCs = (ComposedComponent: Function) => {
    const component = (props: Props) => {
        props.dispatch(getBooks(books));
        return <ComposedComponent {...props} />;
    };

    return connect()(component);
};

export default defaultHOCs;
