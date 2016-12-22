import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './styles/main.scss';
import {Jumbotron, Button, PageHeader, Grid, Row, Col} from 'react-bootstrap';

render(
  <Grid>
    <PageHeader>checkinout.com
      <small>&nbsp;freelance</small>
    </PageHeader>
    <Row className="show-grid">
      <Col xs={12} md={20}>
        <Jumbotron>
          <h1>checkinout</h1>
          <p><Button bsStyle="primary">Hjem</Button> <Button bsStyle="primary">Profil</Button></p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
  ,
  document.getElementById('root')
);

