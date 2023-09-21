import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        history("/");
      })
      .catch((error) => {
        alert(error);
      });
    console.log(email);
  }

  return (
    <>
      <section className="login">
        <div className="leftside">
          <img src="/images/login.jpeg" alt="loginimage" />
        </div>
        <div className="authForm">
          <div>
            <h1>Create Account </h1>
            <p>Sign up to gain access into the library</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your usernamr here"
              />
            </div>
            <div className="formInput">
              <label htmlFor="passwword">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="authButton">
              <button type="submit" className="button">
                Sign Up
              </button>
              <Link to="/" className="">
                Already have an account? Sign In
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
