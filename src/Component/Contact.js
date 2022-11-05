import React, { useState } from "react";
import Input from "./input";
import Button from "./Button";
import Footer from "./Footer";
import Checkbox from "../assets/tick.svg";
import { useFormik } from "formik";
import "./Contact.css";

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [incorrectTextboxError, setIncorrectTextboxError] = useState(false);
  const [incorrectFnameError, setIncorrectFnameError] = useState(false);
  const [incorrectLnameError, setIncorrectLnameError] = useState(false);
  const [incorrectEmailError, setIncorrectEmailError] = useState(false);
  const [incorrectCheckboxError, setIncorrectCheckboxError] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "*Required";
      setIncorrectFnameError(true);
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
      setIncorrectFnameError(true);
    } else {
      setIncorrectFnameError(false);
    }

    if (!values.lastName) {
      errors.lastName = "*Required";
      setIncorrectLnameError(true);
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
      setIncorrectLnameError(true);
    } else {
      setIncorrectLnameError(false);
    }

    if (!values.email) {
      errors.email = "*Required";
      setIncorrectEmailError(true);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
      setIncorrectEmailError(true);
    } else {
      setIncorrectEmailError(false);
    }

    if (!values.message) {
      errors.message = "Please enter a message";
      setIncorrectTextboxError(true);
    } else if (values.message === "message") {
      errors.message = "Don't enter this type of message";
      setIncorrectTextboxError(true);
    } else {
      setIncorrectTextboxError(false);
    }

    if (values.contactMe === false) {
      errors.contactMe = "*Required";
      setIncorrectCheckboxError(true);
    } else {
      setIncorrectCheckboxError(false);
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      contactMe: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contactWrapper">
      <form onSubmit={formik.handleSubmit}>
        <h1>Contact Me</h1>
        <p className="description">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div className="nameWrapper">
          <div>
            <Input
              className="inputbox"
              placeholder={"Enter your first name"}
              label={"First name"}
              onChange={formik.handleChange}
              id="first_name"
              name="firstName"
              error={incorrectFnameError}
            />

            {formik.errors.firstName ? (
              <p className="error">{formik.errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <Input
              className="inputbox"
              placeholder={"Enter your last name"}
              label={"Last name"}
              onChange={formik.handleChange}
              id="last_name"
              name="lastName"
              error={incorrectLnameError}
            />
            {formik.errors.lastName ? (
              <p className="error">{formik.errors.lastName}</p>
            ) : null}
          </div>
        </div>
        <div>
          <Input
            className="inputbox"
            placeholder={"yourname@email.com"}
            label={"Email"}
            id="email"
            name="email"
            onChange={formik.handleChange}
            error={incorrectEmailError}
          />
          {formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="textAreaLabel">Message</label>
          <textarea
            className={`textarea ${
              incorrectTextboxError ? "incorrect-textbox" : ""
            }`}
            type="text"
            placeholder={
              "Send me a message and I'll reply you as soon as possible..."
            }
            id="message"
            onChange={formik.handleChange}
            name="message"
          />
          {formik.errors.message ? (
            <p className="textbox-error">{formik.errors.message}</p>
          ) : null}
        </div>
        <div className="inputCheckBox">
          <label
            className={
              incorrectCheckboxError
                ? "incorrect-textbox"
                : checked
                ? "label-checked"
                : ""
            }
          >
            <input
              type="checkbox"
              onClick={() => setChecked(!checked)}
              name="contactMe"
              onChange={formik.handleChange}
            />
            {checked && <img src={Checkbox} alt="tick" className="tick" />}
          </label>
          <p>{`You agree to providing your data to Gift Okoro who may contact you.`}</p>
          {formik.errors.contactMe ? (
            <p className="checkbox-error">{formik.errors.contactMe}</p>
          ) : null}
        </div>

        <Button className="send-btn" id="btn__submit" type="submit">
          <p>Send Message</p>
        </Button>
      </form>

      <Footer />
    </div>
  );
}
