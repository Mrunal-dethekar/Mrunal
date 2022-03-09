import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function FormComponent() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    pass: "",
    checked: false,
    colorValue: "#000000",
  });

  useEffect(() => {
    console.log(loginDetails);
  }, [loginDetails]);

  return (
    <>
      <Container className="p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={loginDetails.pass}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, pass: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              defaultChecked={loginDetails.checked}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, checked: e.target.checked })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Container className="mt-4">
          <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue={loginDetails.colorValue}
            title="Choose your color"
            onChange={(e) => setLoginDetails({...loginDetails, colorValue: e.target.value})}
          />
        </Container>
      </Container>
    </>
  );
}

export default FormComponent;
