import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Lists from '../containers/Lists';
import ConnectedFooter from '../containers/ConnectedFooter';

const Display = () => (
    <Container>
        <Lists />
        <Row>
            <Col md={12}>
                <hr />
            </Col>
        </Row>
        <ConnectedFooter />
    </Container>
)

export default Display;