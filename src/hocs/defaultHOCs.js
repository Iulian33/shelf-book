// @flow

import React from "react";
import { connect } from "react-redux";
import { setBooks } from "redux/modules/books";
import books from "books.json"

type Props = {
  dispatch: ({ type: string }) => void
};

const defaultHOCs = (ComposedComponent: Function) => {

  const component = (props: Props) => {
    setTimeout(() => {props.dispatch(setBooks(books));}, 2000);


    console.log('loaded');
    return <ComposedComponent {...props} />;
  };

  return connect()(component);
};

export default defaultHOCs;