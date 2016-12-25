import React from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h1>checkinout</h1>
              <p><Button bsStyle="primary">Registrer deg gratis i dag!</Button></p>            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
});
