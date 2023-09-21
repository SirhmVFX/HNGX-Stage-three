import React, { useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((val) => {
        console.log(val);
        history("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <section className="login">
        <div className="authForm">
          <div>
            <h1>Sign In </h1>
            <p>I'm guessing you already ahve an account</p>
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
              <button value="submit" className="button">
                Sign In
              </button>
              <Link to="/sign-up" className="">
                Don't Have an account yet? Sign Up
              </Link>
            </div>
          </form>
        </div>
        <div className="leftside">
          <img src="/images/image.jpg" alt="loginimage" />
        </div>
      </section>
    </>
  );
}

export default Login;
