// @flow
import React from "react";
import NewBookModal from "./NewBook";
import NewShelveModal from "./NewShelve";
import BookDetailsModal from "./BookDetails";

const Modals = () => (
    <>
        <BookDetailsModal/>
        <NewBookModal/>
        <NewShelveModal/>
    </>
);

export default Modals;
