import "./contact.scss";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState("");
  const form = useRef();
  const eraseState = () => {
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_96ul2wh",
        "template_1segude",
        form.current,
        "SkGhmYOojQmE9UWPd"
      )
      .then(
        (result) => {
          e.target.reset();
          if (result.status === 200 && result.text === "OK") {
            setMessage("Message submitted successfully!");
          } else {
            setMessage("Error submitting message. Please try again later.");
          }
        },
        (error) => {
          console.log(error.text);
          setMessage("Error submitting message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form
        className="contact-form"
        ref={form}
        onSubmit={sendEmail}
        onChange={eraseState}
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Enter something"
            maxLength="140"
          ></textarea>
        </div>
        <button type="submit" value="Send">
          Submit
        </button>
        {message && <h3 className="error">{message}</h3>}
      </form>
      <div className="connect-with-me">
        <h2>Connect</h2>
        <a
          href="https://www.linkedin.com/in/pankaj-jogale-8780791a7"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;
        <a
          href="https://github.com/Pankaj-Jogale"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
