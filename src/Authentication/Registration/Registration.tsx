import Input from "../../Components/UI/Input";
import { useState } from "react";
import "./registration.css";

const Registration = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="registration-main">
      <h3>Registration</h3>
      <div className="reg-input-form">
        <Input placeholder="First Name" />
        <Input placeholder="Second Name" />
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
        <button>Register</button>
      </div>
      <div className="haveAcc">
        <p>
          Already have an account?{" "}
          <a className="a-style" onClick={switchToLogin}>
            Sign in
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

export default Registration;
