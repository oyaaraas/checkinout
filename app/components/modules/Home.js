import React from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h1>checkinout</h1>
              <p>
                <LinkContainer to="/login">
                  <Button bsStyle="primary">Registrer deg gratis i dag!</Button>
                </LinkContainer>
              </p>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
});
