import { useState } from "react";
import LogIn from "./../LogInForm/LogInForm";
import Register from "./../RegisterForm/RegisterForm";
import GreenButton from "../../Others/GreenButton/AuthButton";
import "./AuthContainer.css";

const AuthContainer = () => {
  const [openForm, setOpenForm] = useState(false);
  const toggleForm = () => {
    setOpenForm(!openForm);
  };
  return (
    <div className="authContainer">
      <section className="authContainer_btn">
        <GreenButton fn={toggleForm} label="click" />
      </section>
      <section className="authContainer_form">
        {openForm && <LogIn />}
        {!openForm && <Register />}
      </section>
    </div>
  );
};

export default AuthContainer;
