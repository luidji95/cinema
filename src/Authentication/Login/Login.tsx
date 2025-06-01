import { useEffect, useState } from "react";
import Input from "../../Components/UI/Input";
import "./login.css";

const Login = ({ switchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="login-main">
      <h3>Log in</h3>
      <div className="login-input-form">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <button>Log in</button>
      </div>
      <div className="haveAcc">
        <p>
          Don't have an account?{" "}
          <a className="a-style" onClick={switchToRegister}>
            Sign up
          </a>{" "}
          <br></br>{" "}
        </p>
        <p>
          <a className="a-style">Or, Log in as guest</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
