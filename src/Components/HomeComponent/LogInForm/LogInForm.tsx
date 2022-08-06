import { useForm } from "react-hook-form";
import GreenButton from "../../Others/GreenButton/AuthButton";
import "./LogInForm.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// (toast as any)?.configure();

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogInForm = () => {
  const {
    register: login,
    formState: { errors: logErrors },
    handleSubmit: handleLogSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onLogSubmit = (data: any) => {
    //console.log("Log-Data: ", data);
    reset();
    toast.success("Login Successful");
  };

  return (
    <div className="loginForm">
      <section className="form-container">
        <form onSubmit={handleLogSubmit(onLogSubmit)} className="logForm">
          <input
            type="text"
            className="form_field"
            placeholder="User Name"
            style={{
              marginTop: "20px",
              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...login("userName", {
              required: "user name is required",
              minLength: { value: 2, message: "user name is too short" },
              maxLength: { value: 16, message: "user name is too long" },
            })}
          />
          {logErrors.userName && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",

                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(logErrors.userName as any)?.message}
            </p>
          )}

          <input
            type="password"
            className="form_field"
            placeholder="Password"
            style={{
              marginTop: "20px",

              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...login("password", {
              required: "password is required",
              minLength: { value: 8, message: "password is too short" },
              maxLength: { value: 16, message: "password is too long" },
            })}
          />
          {logErrors.password && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(logErrors.password as any)?.message}
            </p>
          )}
          {!logErrors.password && !logErrors.userName && (
            <GreenButton label="Login" />
          )}
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default LogInForm;
