import React from 'react';
import {Button, PageHeader, Grid, Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

export default React.createClass({

  getInitialState() {
    return {
      value: '',
      value2: '',
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return 'success';
  },
  getValidationState2() {
    const length = this.state.value2.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return 'success';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },
  handleChange2(e) {
    this.setState({ value2: e.target.value });
  },

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>Logg inn</PageHeader>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>E-post</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="E-post"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Skriv inn din e-post adresse</HelpBlock>
                </FormGroup>
                <FormGroup
                  controlId="formBasicText2"
                  validationState={this.getValidationState2()}
                >
                  <ControlLabel>Passord</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value2}
                    placeholder="Passord"
                    onChange={this.handleChange2}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Skriv inn ditt passord.</HelpBlock>
                </FormGroup>
                <Button type="submit">
                  Logg inn
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
