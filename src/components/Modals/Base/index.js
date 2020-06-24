// @flow
import React from "react";
import { connect } from "react-redux";
import { Button, Modal, OverlayTrigger, Popover } from "react-bootstrap";
import styled from "styled-components";

const PopoverBody = styled(Popover.Content)`
  padding: 0;
`;

const StyledModal = styled(({darkMode, dispatch, ...rest}) => <Modal {...rest} />)`
  .modal-content {
    ${({darkMode}) =>
        `background: ${darkMode ? '#252525' : '#fff'};
         color: ${darkMode ? '#cacaca' : '#000'};
    `}; 
  }
  .modal-footer {
    border-top: 1px solid ${({darkMode}) => (darkMode ? '#666' : '#ccc')};
  }
  .modal-header {
    border-bottom: 1px solid ${({darkMode}) => (darkMode ? '#666' : '#ccc')};
  }
  .close {
    color: ${({darkMode}) => (darkMode ? '#fff' : '#000')};
  }
`;

type Props = {
    title: string,
    close: () => {},
    action: Object,
    actionTitle: string,
    popOver: boolean,
    popoverComponent?: any,
    popOverTitle: string,
    darkMode: boolean
};

const BaseModal = (
    {
        title,
        close,
        action,
        actionTitle,
        children,
        darkMode,
        popOverTitle,
        popOver = false,
        popoverComponent,
        ...rest
    }: Props
) => (
    <StyledModal darkMode={darkMode} {...rest}>
        <Modal.Header closeButton>
            <Modal.Title>
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={close}>
                Close
            </Button>
            {!popOver ? (
                    <Button variant="primary" onClick={action}>
                        {actionTitle}
                    </Button>)
                : (
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        key="top"
                        placement="top"
                        overlay={(
                            <Popover id={`popover-positioned-top`}>
                                <Popover.Title as="h3">{popOverTitle}</Popover.Title>
                                <PopoverBody>{popoverComponent}</PopoverBody>
                            </Popover>
                        )}>
                        <Button variant="primary">
                            {actionTitle}
                        </Button>
                    </OverlayTrigger>
                )
            }
        </Modal.Footer>
    </StyledModal>
);

const mapStateToProps = ({app}) => ({
    darkMode: app.darkMode,
});

export default connect(mapStateToProps)(BaseModal);
