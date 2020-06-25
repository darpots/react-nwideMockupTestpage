import React, { Component } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';

class FormComponent extends Component {
  state = {
    data1: null,
    data2: null,
    data3: null,
    onSubmit: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      onSubmit: this.state.data3,
    });
  };

  render() {
    return (
      <Container style={{ display: 'flex' }}>
        {/* LEFT SIDE FORM */}
        <Form style={{ display: 'inline-block', flexGrow: 1, marginRight: 10 }}>
          <Form.Field
            name="data1"
            id="form-input-control-first-name"
            control={Input}
            label="onChange"
            placeholder="Enter some text"
            onChange={this.handleChange}
          />
          <hr />
          <Form.Field
            name="data2"
            id="form-input-control-last-name"
            control={Input}
            label="onBlur"
            placeholder="Enter some text"
            onBlur={this.handleChange}
          />
          <hr />
          <Form.Field
            name="data3"
            id="form-input-control-box"
            control={Input}
            label="on Submit"
            placeholder="Enter some text"
            onChange={this.handleChange}
          />
          <Form.Field
            name="data3"
            id="form-button-control-public"
            control={Button}
            content="Submit"
            label="Submit"
            onClick={this.handleSubmit}
          />
        </Form>
        {/* RIGHT SIDE FORM */}
        <Form
          style={{
            display: 'inline-block',
            flexGrow: 1,
            marginLeft: 10,
            marginBottom: 150,
          }}
        >
          <Form.Field
            name="data1"
            id="form-input-control-first-name"
            control={Input}
            label="onChange Result"
            placeholder={this.state.data1}
          />
          <hr />
          <Form.Field
            name="data2"
            id="form-input-control-last-name"
            control={Input}
            label="onBlur Result"
            placeholder={this.state.data2}
          />
          <hr />
          <Form.Field
            id="form-input-control-box"
            control={Input}
            label="on Submit Result"
            placeholder={this.state.onSubmit}
          />
        </Form>
      </Container>
    );
  }
}

export default FormComponent;
