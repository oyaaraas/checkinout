import 'babel-polyfill';
import React from 'react';
import './styles/main.scss';


import {Jumbotron, Button, PageHeader, Grid, Row, Col} from 'react-bootstrap';
import SomeDiv from './somediv';
import Navbar from './navigation-bar';

import {Router, Route, browserHistory }from 'react-router';

const App = () => (
  <Router history={ browserHistory}>
    <Route path="/(:url)" component="{}"></Route>
)

  render() {
    return (
      <div className="page">
        <Navbar/>
        <Grid>
          <PageHeader>checkinout.com
            <small>&nbsp;freelance</small>
          </PageHeader>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Jumbotron>
                <h1>checkinout</h1>
                <p><Button bsStyle="primary">Registrer deg gratis i dag!</Button></p>
              </Jumbotron>
            </Col>
            <Col xs={3} md={2}>
              <SomeDiv/>
              <SomeDiv/>
              <SomeDiv/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
