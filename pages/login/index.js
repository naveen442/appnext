import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router';
import axios from "axios";
// import "./Login.css"; 

const Login = () => {
  const router = useRouter();
  const clearData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(clearData);
  const [formErrors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!Email.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (!password.test(values.password)) {
      errors.password = "This is not a valid password format";
    }

    return errors;
  };

  const formDataAdd = async (e) => {
    e.preventDefault();
    setErrors(validate(formData));

    // if (Object.keys(formErrors).length === 0) {
      const formInfo = {
        email: formData.email,
        password: formData.password,
      };
      console.log(formErrors);
      if(Object.values(formErrors).length === 0){
        try {
          const response = await axios.post(
            "http://localhost:3001/login",
            formInfo
          );
          console.log(response);
          router.push("/dashboard");
        } catch (error) {
          console.log(error);
          // handle error here
        }
      }else{
        alert('sdcdsc')
      }
      
      setFormData(clearData);
    // }
  };

  return (
    <div className="Login container loginpage">
      <Form className="my-5">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="mt-5 margin_left">Email</Form.Label>
          <Form.Control
            className="w-50 margin_left"
            autoFocus
            name="email"
            type="email"
            value={formData.email}
            onChange={(event) => {
              setFormData({
                ...formData,
                email: event.target.value,
              });
            }}
          />
          {formErrors.email && (
            <p className="required">{formErrors.email}</p>
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="margin_left">Password</Form.Label>
          <Form.Control
            className="w-50 margin_left"
            name="pwd"
            type="password"
            value={formData.password}
            onChange={(event) => {
              setFormData({
                ...formData,
                password: event.target.value,
              });
            }}
          />
          {formErrors.password && (
            <p className="required">{formErrors.password}</p>
          )}
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          className="margin_left my-2"
          onClick={formDataAdd}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};


export default Login;