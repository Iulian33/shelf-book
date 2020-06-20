// @flow
import React from 'react';
import LayoutContainer from "components/Layout";
import defaultHOCs from "hocs/defaultHOCs";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import Modals from "components/Modals";

function App() {
    return (
        <LayoutContainer>
            <Header/>
            <Main/>
            <Footer/>
            <Modals/>
        </LayoutContainer>
    );
}

export default defaultHOCs(App);
