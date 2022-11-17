import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
//import {useHistory} from "react-router-dom"

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory()
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
          }).then(()=>{
            //history.push('/')
          }).catch((error)=>{

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
      <div>
        <form
          className="flex flex-col w-[90%] rounded-t-2xl"
          onSubmit={submitHandler}
        >
          {!props.isLogin && (
            <>
              <label htmlFor="name" className="text-slate-800 font-semibold">
                Full Name<span className="mx-1 text-red-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                className="my-3 mb-1 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={nameHandler}
                onBlur={() => setNameIsBlur(true)}
              ></input>
            </>
          )}
          {!nameIsValid && nameIsBlur && !props.isLogin && (
            <p className="text-red-600 text-sm mb-1 ">
              Cannot leave feild empty
            </p>
          )}
          <label htmlFor="email" className="text-slate-800 font-semibold">
            Email<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            className="my-3 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            onBlur={() => setEmailIsBlur(true)}
          ></input>
          {!emailIsValid && emailIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">Include an @ in email</p>
          )}
          <label htmlFor="password" className="text-slate-800 font-semibold">
            Password<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="password"
            name="password"
            className="my-3 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
            onBlur={() => setPaswordIsBlur(true)}
          ></input>
          {!passwordIsValid && passwordIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">
              Minimum 7 characters needed
            </p>
          )}
          <button
            type="submit"
            className={
              !props.isLogin
                ? nameIsValid && emailIsValid && passwordIsValid
                  ? "rounded-3xl bg-blue-500 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                  : "rounded-3xl bg-slate-300 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                : emailIsValid && passwordIsValid
                ? "rounded-3xl bg-blue-500 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                : "rounded-3xl bg-slate-300 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
            }
            disabled={
              !props.isLogin
                ? !(nameIsValid && emailIsValid && passwordIsValid)
                : !(emailIsValid && passwordIsValid)
            }
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
