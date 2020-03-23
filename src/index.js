import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl,FormLabel } from "react-bootstrap";

class Test extends React.Component {
  render() {
    return (<div>
      <Form>
        <FormGroup controlId="emailid">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup controlId="userpassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
