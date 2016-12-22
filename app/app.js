import 'babel-polyfill';
import React from 'react';
import './styles/main.scss';
import {Jumbotron, Button, PageHeader, Grid, Row, Col} from 'react-bootstrap';
import SomeDiv from './somediv';
import Navbar from './navigation-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

