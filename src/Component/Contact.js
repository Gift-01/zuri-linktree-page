import React from "react";
import Input from "./input";
import Button from "./Button";
import Footer from "./Footer";
import "./Contact.css"

export default function Contact() {
  return (
      <div className="contactWrapper">
      <form>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <Input placeholder={"Enter your first name"} label={"First Name"} />
        <Input placeholder={"Enter your last name"} label={"Last Name"} />
        <Input placeholder={"yourname@email.com"} label={"Email"} />
        <Input
          type="text"
          placeholder={
            "Send me a message and I'll reply you as soon as possible..."
          }
          label={"Message"}
        />
        <Input
          type="checkbox"
          checkBoxLabel={
            "You agree to providing your data to {name} who may contact you."
          }
        />
        <Button>
          <p>Send Message</p>
        </Button>
      </form>
      <Footer />
    </div>
  );
}
