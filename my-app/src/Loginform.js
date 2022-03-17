import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

export default function Loginform() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    alert(" WELCOME  " + `${inputValue.email}`);
    setInputValue({email: "" , password:""});
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    
    <Form onSubmit={submitHandler}>
      
      <h5 className="text-center , my-4">خوش آمدید</h5>
      <Form.Group className="mb-3,require" controlId="formBasicEmail">
        <Form.Control
          required
          type="email"
          placeholder=" پست الکترونیک"
          className="inputStyle"
          value={inputValue.email}
          onChange={(event) => {
            setInputValue({ ...inputValue, email: event.target.value });
          }}
        />
        {/* <Form.Control.Feedback type="invalid">
            Please provide a valid city.
        </Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        {passwordShown ? <i  onClick={togglePasswordVisiblity} className="bi bi-eye "></i>:<i onClick={togglePasswordVisiblity} className="bi bi-eye-slash"></i>}
        <Form.Control
            required
          type={passwordShown ? "text" : "password"}
          placeholder="رمز ورود"
          className="inputStyle "
          value={inputValue.password}
          onChange={(event) => {
            setInputValue({ ...inputValue, password: event.target.value });
          }}
        />
        
      </Form.Group>
      <Button variant="success" type="submit" className="w-100">
        ورود
      </Button>
    </Form>


  );
}
