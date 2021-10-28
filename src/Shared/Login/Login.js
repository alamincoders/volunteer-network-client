import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginLogo from "../../images/logos/login.svg";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login container mt-5 mx-auto row">
      <div className="col-md-7">
        <img className="img-fluid w-100" src={loginLogo} alt="" />
      </div>
      <div className="col-md-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Email" type="email" {...register("email")} />
          <input placeholder="Password" type="password" {...register("password")} />
          <input type="submit" />
        </form>
        <p>
          <span className="ms-2"> Create a new account? Please</span>{" "}
          <Link className="text-decoration-none" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
