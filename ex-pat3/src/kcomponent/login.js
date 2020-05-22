import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

{
  /* <div className="form-wrapper">
<form onSubmit={submitForm}>
  <fieldset>
    <legend>Form goes down here</legend>
    <label className="dklabel" htmlFor="name">
      Name:
      <input
        className="dktext"
        
      />
    </label>
    <br></br>

    {/* label and password for password 
    <label className="dklabel" htmlFor="password">
      Password:
      <input
        className="dktext"
        
      />
    </label>
    {/* Button and Submit *
    <button type="submit">Submit</button>
  </fieldset>
</form>
</div> */
}

// const StyledH3 = styled.label`
//   background: dodgerblue;
//   border: 2px solid green;
//   font-weight: bold;
//   font-size: 50px;
//   color: red;
//   border-radius: 10px;
// `;

const formSchema = yup.object().shape({
  //take name of each of our form from the <input name="name"
  name: yup.string().required("Name is required"),
  myname: "",
  email: yup.string().email("email must be valid").required("Cant't be empty"),

  password: yup
    .string()
    //.password("valid password plz")
    .required("Cant't be empty"),

  terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
}); //expression for yup completes

const Form = () => {
  // state defining and assinging  an object :Destructuring
  const [dataState, setDataState] = useState({
    name: "",
    myname: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    myname: "",
    password: "",
  });

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    console.log("input changed");
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDataState({ ...dataState, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted!!!!");
    axios
      .post("https://github.com/bw-ptct-Expat-Journal-3/backend", dataState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Form goes down here</legend>
          <label className="dklabel" htmlFor="name">
            Name:
            <input
              className="dktext"
              type="text"
              name="name"
              id="name"
              value={dataState.name} //default value will be the text entered val
              placeholder="Enter Name"
              onChange={inputChange}
            />
          </label>
          <br></br>

          {/* label and password for password */}
          <label className="dklabel" htmlFor="password">
            Password:
            <input
              className="dktext"
              type="password"
              name="password"
              id="password"
              value={dataState.password}
              placeholder="Encrypted"
              onChange={inputChange}
            />
          </label>
          {/* Button and Submit */}
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
