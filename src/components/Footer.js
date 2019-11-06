import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = ({ addItem }) => {
    return(
        <Row>
            <Col md={12}>
                <button onClick={() => addItem()}>
                    Add Item
                </button>
            </Col>
        </Row>
    )
}

export default Footer