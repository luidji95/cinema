import { useState } from "react";
import Input from "../../Components/UI/Input";
import "./login.css";
import { supabase } from "../../Supabase/supabaseClient";
import { useValidation } from "../../Hooks/useValidation";
import { loginShema } from "../../Validation/authSheme";

interface Props {
  switchToRegister: () => void;
  setIsLoggedIn: (value: boolean) => void;
}

export default function Login({ switchToRegister, setIsLoggedIn }: Props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const { validate, errors } = useValidation(loginShema);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate(formData);
    if (!isValid) return;

    if (!formData.email || !formData.password) {
      setServerError("Email i lozinka su obavezni.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setServerError(error.message);
    } else {
      setServerError(null);
      alert("Successfully logged in!");
      setIsLoggedIn(true);
    }
  };

  return (
    <form className="login-main" onSubmit={handleLogin}>
      <h3>Log in</h3>
      <div className="login-input-form">
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
        {(errors || serverError) && (
          <p style={{ color: "red" }}>{errors || serverError}</p>
        )}
        <button>Log in</button>
      </div>
      <div className="haveAcc">
        <p>
          Already have an account?{" "}
          <a className="a-style" onClick={switchToRegister}>
            Sign in
          </a>{" "}
          <br></br>{" "}
        </p>
        <p>
          <a className="a-style">Or, Log in as guest</a>
        </p>
      </div>
    </form>
  );
}
