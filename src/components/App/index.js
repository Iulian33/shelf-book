// @flow
import React from 'react';
import LayoutContainer from "components/Layout";
import defaultHOCs from "hocs/defaultHOCs";

function App() {
    return (
        <LayoutContainer>
            Main App
        </LayoutContainer>
    );
}

export default defaultHOCs(App);
