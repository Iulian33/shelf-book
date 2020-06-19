// @flow
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

type Props = {
    children: any
};

const GlobalStyle = createGlobalStyle`
    ${reset};

    html {
        box-sizing: border-box;
    }

    body {
        position: relative;
        font-family: "Roboto", sans-serif;
    }
    button{
        padding: 0;
        border-width: 0;
        border-radius: 0;
        font-family:inherit;
        background: none;
        &:focus {
            outline: none;
        }
    }
    #root{
        height: 100%;
    }
    *, ::after, ::before {
        box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .noselect {
        user-select: none;
    }
`;
const LayoutContainer = (props: Props) => (
    <>
        <GlobalStyle/>
        {props.children}
    </>
);

export default LayoutContainer;
