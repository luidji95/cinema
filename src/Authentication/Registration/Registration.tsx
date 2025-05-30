import Input from "../../Components/UI/Input";

const Registration = () => {
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
    </div>
  );
};

export default Registration;
