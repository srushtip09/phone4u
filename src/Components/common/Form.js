import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import styles from './loginform.css'
import {useNavigate} from "react-router-dom"

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
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
            console.log("hello")
            navigate('/admin')
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
  const handleCallback = async (response) => {
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    const { name, email } = userObject
    const userInfoLogin = {
        Username: email,
        Email: email,
        Name: name,
        Password: userObject.sub,
        ImageUrl: userObject.picture
    }
    console.log(userInfoLogin)
  


}
 

  return (
    <>
    <div style={{
      backgroundImage: "url(src/pages/form-bg-final2.jfif)",
      height: "300px",
      backgroundRepeat: "no-repeat"
    }} >
      <div className={styles.container} style={{ width: "50%", margin: "0rem auto 0 auto"}}>
        <form
          className={styles.form}
          onSubmit={submitHandler}
          style={{backgroundColor: "#113448e3",
            padding: "2.5rem 0.625rem",
            borderRadius: "0.25rem"}}
        >
          {!props.isLogin && (
            <>
            <div className={styles.formgroup} style={{}}>
              <label htmlFor="name" className={styles.formquestion} style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0',paddingTop:"10px"}}>
                Full Name<span className="mx-1 text-red-600">*</span>
              </label>
              <input
                id="name"
             
                className={styles.formcontrol}          
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={nameHandler}
                onBlur={() => setNameIsBlur(true)}
                style={{display: "block",
                  width: "100%",
                  height: "2.375rem",
                  padding: "0.375rem 0.375rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                  backgroundClip: "padding-box",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                  transition: "borderColor 0.15s ease-in-out, box-shadow 0.15s ease-in-out"}}
              
              
              ></input></div>
            </>
          )}

          {!nameIsValid && nameIsBlur && !props.isLogin && (
            <p className="text-red-600 text-sm mb-1 ">
              Cannot leave feild empty
            </p>
          )}
          <div className={styles.formgroup}>
          <label htmlFor="email" className={styles.formquestion} style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0',paddingTop:"10px"}}>
            Email<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="email"
            
            className={styles.formcontrol}            
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            onBlur={() => setEmailIsBlur(true)}
            style={{display: "block",
                  width: "100%",
                  height: "2.375rem",
                  padding: "0.375rem 0.375rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                  backgroundClip: "padding-box",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                  transition: "borderColor 0.15s ease-in-out, box-shadow 0.15s ease-in-out"}}
          ></input></div>
          {!emailIsValid && emailIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">Include an @ in email</p>
          )}
           <div className={styles.formgroup}>
          <label htmlFor="password" className={styles.formquestion} style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0',paddingTop:"10px"}}>
            Password<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="password"
            
            className={styles.formcontrol}            
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
            onBlur={() => setPaswordIsBlur(true)}
            style={{display: "block",
                  width: "100%",
                  height: "2.375rem",
                  padding: "0.375rem 0.375rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                  backgroundClip: "padding-box",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                  transition: "borderColor 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  }}
          ></input></div>
          {!passwordIsValid && passwordIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">
              Minimum 7 characters needed
            </p>
          )}
          <div className={styles.buttons} style={{display:'flex', paddingLeft:'40%',paddingTop:'20px'}}>

          <button
            type="submit" id="login"
            className={
              !props.isLogin
                ? nameIsValid && emailIsValid && passwordIsValid
                  ? "submit-button"
                  : "submit-button"
                : emailIsValid && passwordIsValid
                ? "submit-button"
                : "submit-button"
            }
            
            style={{display: "inline-block",
            width: "auto",
            padding: "0.75rem",
            backgroundColor:"#13aa87",
            color: "inherit",
            borderRadius: "2px",
            border: "solid 1.5px #13aa87",
            cursor: "pointer",
            position: "relative",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.4",
            color: "white",
            margin: "0"}}
          >
            {props.isLogin ? "Sign-In" : "Register"}
          </button>
          <div style={{position:'relative'}} className={styles.button} id='google-signin'></div>
          </div>
          <ToastContainer />
        </form>
      </div>
      </div>
 
    </>
  );
};
export default Form;
