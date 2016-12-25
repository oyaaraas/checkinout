import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>Min profil <small>Øyvind</small></PageHeader>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
