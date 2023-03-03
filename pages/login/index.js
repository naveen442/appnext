import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

// import "./Login.css";

const Login=() =>{

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="Login container  loginpage ">

      <Form onSubmit={handleSubmit} className="my-5">

        <Form.Group size="lg" controlId="email" >

          <Form.Label className="mt-5 margin_left">Email</Form.Label>

          <Form.Control
          className="w-50 margin_left"
            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label className="margin_left">Password</Form.Label>

          <Form.Control
 className="w-50 margin_left"
            type="password"
       
            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit"  className="margin_left my-2" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}

export default Login;