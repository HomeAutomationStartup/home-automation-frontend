import { useForm } from "react-hook-form";
import GreenButton from "../../Others/Button/AuthButton";
import "./RegisterForm.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const {
    register: registration,
    formState: { errors: regErrors },
    handleSubmit: handleRegSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onRegSubmit = (data: any) => {
    reset();
    toast.success("Register Successful");
  };

  return (
    <div className="registerForm">
      <section className="form-container">
        <form onSubmit={handleRegSubmit(onRegSubmit)} className="regForm">
          <input
            type="text"
            className="form_field"
            placeholder="User Name"
            style={{
              marginTop: "1rem",
              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...registration("userName", {
              required: "user name is required",
              minLength: { value: 2, message: "user name is too short" },
              maxLength: { value: 16, message: "user name is too long" },
            })}
          />
          {regErrors.userName && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(regErrors.userName as any)?.message}
            </p>
          )}

          <input
            type="text"
            className="form_field"
            placeholder="Name"
            style={{
              marginTop: "1rem",
              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...registration("name", {
              required: "name is required",
              minLength: { value: 2, message: "name is too short" },
              maxLength: { value: 26, message: "name is too long" },
            })}
          />
          {regErrors.name && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(regErrors.name as any)?.message}
            </p>
          )}

          <input
            type="password"
            className="form_field"
            placeholder="Password"
            style={{
              marginTop: "1rem",
              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...registration("password", {
              required: "password is required",
              minLength: { value: 8, message: "password is too short" },
              maxLength: { value: 16, message: "password is too long" },
            })}
          />
          {regErrors.password && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(regErrors.password as any)?.message}
            </p>
          )}

          <input
            type="email"
            className="form_field"
            placeholder="Email"
            style={{
              marginTop: "1rem",
              fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
            }}
            {...registration("email", { required: "email is required" })}
          />
          {regErrors.email && (
            <p
              style={{
                color: "red",
                background: "rgb(255, 0, 0, 0.1)",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                borderRadius: "10px",
                fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
              }}
            >
              {(regErrors.email as any)?.message}
            </p>
          )}

          {!regErrors.email &&
            !regErrors.password &&
            !regErrors.name &&
            !regErrors.userName && <GreenButton label="submit" />}
        </form>

        {/* {!regErrors.email &&
          !regErrors.password &&
          !regErrors.name &&
          !regErrors.userName && (
            <section className="appPolicies">
              <span>Terms &amp; Conditions</span>
            </section>
          )} */}
      </section>

      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
