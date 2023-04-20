import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import '../styles/ContactMe.css';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wdhlone",
        "template_x4klnkq",
        form.current,
        "nv0uiXgV67_wx_sdd"
      )
      .then(
        (result) => {
          console.log(result.text);
          if((result.text) === "OK")
          {
            alert("Email send successfully");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  
  
  return (
    <center>
    <div className="contact">
    <StyledContactForm>
      <center>
        <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <br />
        <br />
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Enter your name"/>
        <br />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Enter your email"/>
        <br />
        <br />
        <label>Message</label>
        <textarea name="message" placeholder="Enter the message"/>
        <br />
        <br />
        <input type="submit" value="Send" />
      </form>
      </center>
    </StyledContactForm>
    </div>
    </center>
  );
}

export default ContactMe;

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      font-style: italic;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      font-style: italic;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      font-size: 30px;
      font-style: italic;
      color: white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
