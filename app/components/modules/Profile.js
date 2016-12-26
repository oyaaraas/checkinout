import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default React.createClass({

  getInitialState() {
    return {
      date: moment(),
      focused: false,
    };
  },
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>Min profil <small>Øyvind</small></PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <SingleDatePicker
                id="date_input"
                date={this.state.date || null}
                focused={this.state.focused || false}
                onDateChange={(date) => { this.setState({ date }); }}
                onFocusChange={({ focused }) => { this.setState({ focused });}}
              />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
});
