import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

import ConnectedItemsList from './ConnectedItemsList';

function Lists({ lists }) {
    return (
        <Row>
            {lists.map((list, index) => {
                return (
                    <Col md={4} key={index}>
                        <h2>{list.title}</h2>
                        <hr />
                        <ConnectedItemsList listId={list.id} />
                    </Col>
                );
            })}
        </Row>
    );
}

const mapStateToProps = (state) => {
    let listsArray = Object.entries(state.lists.byId);
    let listsToDisplay = [];
    for (const element of listsArray) {
        listsToDisplay.push(element[1])
    }
    
    return {
        lists: listsToDisplay
    };
};


export default connect(
    mapStateToProps
)(Lists);
