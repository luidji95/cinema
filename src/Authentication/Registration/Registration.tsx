import Input from "../../Components/UI/Input";
import { useState } from "react";
import "./registration.css";
import { useValidation } from "../../Hooks/useValidation";
import { registrationShema } from "../../Validation/authSheme";
import { supabase } from "../../Supabase/supabaseClient";

const Registration = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const { validate } = useValidation(registrationShema);

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate(formData);
    if (!isValid) return;

    if (formData.password !== formData.confirmPassword) {
      setServerError("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
        },
      },
    });

    if (error) {
      setServerError(error.message);
    } else {
      setServerError(null);
      alert("Successfully registered! Please check your email.");
      switchToLogin(false);
    }
  };

  return (
    <form className="registration-main" onSubmit={handleRegistration}>
      <h3>Registration</h3>
      <div className="reg-input-form">
        <Input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <Input
          placeholder="Second Name"
          value={formData.secondName}
          onChange={(e) =>
            setFormData({ ...formData, secondName: e.target.value })
          }
        />
        <Input
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Input
          placeholder="Confirm password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        {serverError && (
          <p style={{ color: "red", marginBottom: "0.5rem" }}>{serverError}</p>
        )}

        <button>Register</button>
      </div>

      <div className="haveAcc">
        <p>
          Already have an account?{" "}
          <a className="a-style" onClick={switchToLogin}>
            Sign in
          </a>
        </p>
        <p>
          <a className="a-style">Or, Log in as guest</a>
        </p>
      </div>
    </form>
  );
};

export default Registration;
