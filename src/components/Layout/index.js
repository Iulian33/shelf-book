// @flow
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { connect } from "react-redux";

type Props = {
    children: any,
    darkMode: boolean
};

const GlobalStyle = createGlobalStyle`
    ${reset};

    html {
        box-sizing: border-box;
    }

    body {
        position: relative;
        font-family: "Roboto", sans-serif;
        background: ${({darkMode}) => (darkMode ? '#1d1d1d' : '#fff')};
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
    
    .custom-select {
      background: ${({darkMode}) => (darkMode ? '#252525' : '#fff')};
      color: ${({darkMode}) => (darkMode ? '#fff' : '#000')};
    }
    
    .form-control{
        ${({darkMode}) =>
           `background: ${darkMode ? '#252525' : '#fff'};
            color: ${darkMode ? '#fff' : '#000'};
        `};
        &:focus {
          ${({darkMode}) =>
            `background: ${darkMode ? '#252525' : '#fff'};
            color: ${darkMode ? '#fff' : '#000'};
         `};
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
        <GlobalStyle darkMode={props.darkMode}/>
        {props.children}
    </>
);

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode,
});

export default connect(mapStateToProps)(LayoutContainer);
