import React, { useState } from "react";
import { db } from "../../firebase";

// document ID - q1mJLTxlAeEkw0r7P6FL

const ContactForm = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [fnameError, setFnameError] = useState();
  const [lnameError, setLnameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const sendContactForm = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted.");
      })
      .catch((error) => {
        alert(error.message);
      });

    // after submit, the values are going to stay the same -> we set the values to empty strings
    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (input) => {
    var validMail = String(input)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validMail) {
      setEmailError("");
      return input;
    } else {
      setEmailError("Please enter a valid email!");
    }
  };

  const checkIfDisabled = () => {
    var disabled = false;
    if (fname && lname && email && message) {
      disabled = {};
    } else {
      disabled = {
        pointerEvents: "none",
        opacity: "0.7",
      };
    }
    return disabled;
  };

  const checkIfEmpty = () => {
    var empty = false;
    if (fname && fname && email && message && message) {
      empty = {};
    } else {
      empty = {
        border: "1px solid red",
      };
    }
    return empty;
  };

  return (
    <div className="w-full" id="contactForm">
      <div className="flex flex-wrap justify-center mx-auto my-8">
        <div className="w-full mx-auto my-8">
          <h2 className="mx-auto my-0 text-center text-gray-900 text-2xl font-bold">
            Get in touch
          </h2>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex justify-center">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="fname"
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                // style={checkIfEmpty()}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                tabIndex={1}
                autoComplete="off"
              />
              <p className="text-red-500 text-xs italic">{fnameError}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="lname"
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                tabIndex={2}
                autoComplete="off"
              />
              <p className="text-red-500 text-xs italic">{lnameError}</p>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="email"
              className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(validateEmail(e.target.value));
              }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              tabIndex={3}
              autoComplete="off"
            />
            <p className="text-red-500 text-xs italic">{emailError}</p>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="message"
              className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus-visible:outline-none focus:bg-white focus:border-gray-500 h-48"
              tabIndex={4}
              autoComplete="off"
            ></textarea>
            <p className="text-red-500 text-xs italic">{messageError}</p>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <button
              type="submit"
              onClick={sendContactForm}
              style={checkIfDisabled()}
              className="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white text-md font-bold px-8 py-3 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
