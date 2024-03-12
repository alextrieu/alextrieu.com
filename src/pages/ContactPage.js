import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import "./pages.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/719efb00-e0b9-11ee-8980-3397320e035b";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <MainLayout>
      <div className="contact-container">
        <div className="contact-intro">
          <h1>Say Hello!</h1>
          <p>I’d love to hear from you!</p>
          <p>Email me at hello@alextrieu.com or fill out the form below</p>
        </div>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          className="form-container"
        >
          <div className="name-container">
            <div className="input-container">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
          </div>
          <div className="input-container">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="input-container">
            <label>Send a message</label>
            <textarea name="message" required />
          </div>
          <div>
            <button type="submit" className="contact-btn">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
