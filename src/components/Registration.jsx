import React from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";

class Registration extends React.Component {
  state = {
    form: {
      name: "",
      surname: "",
      email: "",
      password: "",
      dob: 2000,
      address: "",
      city: "",
      postcode: "",
    },
  };
  updateRegisterField = (e) => {
    let form = { ...this.state.form };
    let currentId = e.currentTarget.id;
    form[currentId] = e.currentTarget.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state.form);
  };
  render() {
    return (
      <Container>
        <Row>
          <h1 className="my-3">Registration Form:</h1>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Stefano"
                minLength={2}
                required
                value={this.state.form.name}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your name must be longer than 1 character.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="surname">Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                id="surname"
                placeholder="the Sexy"
                minLength={3}
                required
                value={this.state.form.surname}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your surname must be longer than 2 characters.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="dob">Year of Birth</Form.Label>
              <Form.Control
                type="number"
                name="dob"
                id="dob"
                placeholder="6969"
                min="1910"
                max="2077"
                required
                value={this.state.form.dob}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your must be born before 1910. We hate centenarians.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="xXxSexyManMeatxXx@pornhub.com"
                required
                value={this.state.form.email}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="( ͡° ͜ʖ ͡°)"
                minLength={8}
                required
                value={this.state.form.password}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your password must contain at least 8 characters.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="address">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                placeholder="Dark Side of the Moon"
                required
                value={this.state.form.address}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                placeholder="Boner Town"
                required
                value={this.state.form.city}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="postcode">Postal Code</Form.Label>
              <Form.Control
                type="number"
                name="postcode"
                id="postcode"
                placeholder="80085"
                minLength={5}
                maxLength={5}
                required
                value={this.state.form.postcode}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>Your postal code should be 5 numbers.</Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Button variant="danger" type="submit" className="w-100">
                SUBMIT TO THE SEXY, STEFANO
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default Registration;
