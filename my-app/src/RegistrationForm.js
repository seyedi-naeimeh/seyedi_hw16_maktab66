import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function RegistrationForm() {
  const [inputValue, setInputValue] = useState("");
  const [onInput, setOninput] = useState({ email: "", password: "" , firstName:"" ,lastName:"",placeuniversity:"" ,province:""});
  const [getData, statGetData] = useState([]);
  const [edu, setEdu] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("با موفقیت ثبت شد");
    setOninput({ email: "", password: "" ,firstName:"" ,lastName:"",placeuniversity:"" ,province:""});
    setInputValue({inputValue:""})
  };

  useEffect(() => {
    fetch("iranstates.json")
      .then((response) => response.json())
      .then((data) => {
        statGetData(data);
      });
  }, []);

  return (
    <Form onSubmit={submitHandler}>
      <h5 className="text-center , my-4"> رایگان ثبت نام کنید </h5>
      <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
        <Form.Control
          required
          type="text"
          name="firstName"
          placeholder=" نام "
          value={onInput.firstName}
          className="ms-2 inputStyle"
          onChange={(event) => {
            setOninput({ ...onInput, firstName: event.target.value });
          }}
        />
        <Form.Control
          required
          type="text"
          name="lastName"
          value={onInput.lastName}
          placeholder="  نام خانوادگی "
          className=" inputStyle"
          onChange={(event) => {
            setOninput({ ...onInput, lastName: event.target.value });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="پست الکترونیک"
          className="inputStyle"
          value={onInput.email}
          onChange={(event) => {
            setOninput({ ...onInput, email: event.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          required
          type="password"
          name="password"
          placeholder="رمز ورود"
          className="inputStyle"
          value={onInput.password}
          onChange={(event) => {
            setOninput({ ...onInput, password: event.target.value });
          }}
        />
      </Form.Group>

      <Form.Select
        required 
        as="select" 
        type="select"
        aria-label="Default select example"
        className=" inputStyle mb-3"
        onChange={() => setEdu(true)}
      >
        <option selected disabled value="">
          تحصیلات
        </option>
        <option value="1">کاردانی</option>
        <option value="2">کارشناسی</option>
        <option value="3">کارشناسی ارشد</option>
        <option value="3">دکترا </option>
      </Form.Select>

      {edu && (
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="text"
            name="placeuniversity"
            placeholder="محل تحصیل"
            className="inputStyle"
            value={onInput.placeuniversity}
            onChange={(event) => {
              setOninput({ ...onInput, placeuniversity: event.target.value });
            }}
          />
        </Form.Group>
      )}

      <Form.Select
        
        aria-label="Default select example"
        className=" inputStyle mb-3"
        name="province"
        value={inputValue}
        onChange={(event) => 
          setInputValue(event.target.value)
        }
      >
        <option disabled selected  value="">استان</option>
        {Object.keys(getData).map((item, index) => {
          return (
            <option key={index} value={Object.keys(getData).indexOf(item)}>
              {item}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select
        required
        aria-label="Default select example"
        className=" inputStyle mb-3"
      >
        <option selected disabled value="">
          شهر محل تولد
        </option>

        {Object.values(getData)[parseInt(inputValue)] !== undefined
          ? Object.values(getData)[parseInt(inputValue)].map((city) => {
              return <option value={city}>{city}</option>;
            })
          : ""}

       
      </Form.Select>

      <Button variant="success" type="submit" className="w-100">
        ثبت نام
      </Button>
    </Form>
  );
}
