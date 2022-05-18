import React from "react";
import { signin } from "../service/ApiService";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    signin({ email: email, password: password });
  };
  return (
    <div>
      <p>로그인 페이지</p>
    </div>
  );
};

export default Login;
