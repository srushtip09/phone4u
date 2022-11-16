import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import './loginform.css'


import axios from "axios";
const Form = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [passwordIsValid, setPaswordIsValid] = useState(false);
  const [emailIsBlur, setEmailIsBlur] = useState(false);
  const [nameIsBlur, setNameIsBlur] = useState(false);
  const [passwordIsBlur, setPaswordIsBlur] = useState(false);
  
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    if (passwordIsBlur || nameIsBlur || emailIsBlur) {
      if (password.length >= 7) setPaswordIsValid(true);
      else setPaswordIsValid(false);

      if (name.length > 0) setNameIsValid(true);
      else setNameIsValid(false);

      if (email.length > 0 && email.includes("@")) setEmailIsValid(true);
      else setEmailIsValid(false);
    }
  }, [name, email, password, nameIsBlur, passwordIsBlur, emailIsBlur]);
  const submitHandler = async (event) => {
    let FormisValid = nameIsValid && emailIsValid && passwordIsValid;
    event.preventDefault();
    let API_KEY = "AIzaSyB1uqDhZnTQMfvz2gfU8K9syiG_G18vv2U";
    if (props.isLogin) {
      try {
        const result = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (result.ok) {
          const data = await result.json();
          console.log(data, "auth");

          await axios.post(`http://localhost:5000/api/admin/login`, {
            token: data.idToken,
            name: name,
            email: email,
            password: password,
          });
        } else {
          toast.error("Authentication Failed !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const result = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
          }
        );
        if (result.ok) {
          const data = await result.json();
          await axios.post(`http://localhost:5000/api/admin/signup`, {
            token: data.idToken,
            name: name,
            email: email,
            password: password,
          });
        } else
          toast.error("Authentication Failed !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      } catch (err) {
        console.log(err);
      }
    }
    if (FormisValid) {
      console.log(email, name, password);
      setEmail("");
      setPassword("");
      setName("");
      setNameIsBlur(false);
      setEmailIsBlur(false);
      setPaswordIsBlur(false);
      setNameIsValid(false);
      setPaswordIsValid(false);
      setEmailIsValid(false);
    }
  };
  return (
    <>
      <div className='container' style={{ width: "50%", margin: "3.125rem auto 0 auto" }}>
        <div className='form-title'><h2>ADMIN LOGIN</h2></div>
        <form
          className='form'
          onSubmit={submitHandler}
        >
          {!props.isLogin && (
            <>
            <div class="form-group">
              <label htmlFor="name" className="form-question" style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={nameHandler}
                onBlur={() => setNameIsBlur(true)}
              ></input></div>
            </>
          )}
          {!nameIsValid && nameIsBlur && !props.isLogin && (
            <p>
              Cannot leave field empty
            </p>
          )}
          <div class="form-group">
          <label htmlFor="email" className="form-question" style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}}>
            Email
          </label>
          <input
            id="email"
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            onBlur={() => setEmailIsBlur(true)}
          ></input></div>
          {!emailIsValid && emailIsBlur && (
            <p>Include an @ in email</p>
          )}
          <div className="form-group">
          <label htmlFor="password" className="form-question" style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}}>
            Password
          </label>
          <input
            id="password"
            name="password"
            className="form-control"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
            onBlur={() => setPaswordIsBlur(true)}
          ></input></div>
          {!passwordIsValid && passwordIsBlur && (
            <p>
              Minimum 7 characters needed
            </p>
          )}
          <button
            type="submit"
            className={
              !props.isLogin
                ? nameIsValid && emailIsValid && passwordIsValid
                  ? "submit-button"
                  : "submit-button"
                : emailIsValid && passwordIsValid
                ? "submit-button"
                : "submit-button" 
            }
            disabled={
              !props.isLogin
                ? !(nameIsValid && emailIsValid && passwordIsValid)
                : !(emailIsValid && passwordIsValid)
            }
            style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}}

          >
            {props.isLogin ? "Sign-In" : "Register"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};
export default Form;
