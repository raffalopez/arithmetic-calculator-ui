import { useState } from "react";
import { loginFields } from "../../helpers/constants";
import FormAction from "../FormAction";
import FormExtra from "../FormExtra";
import Input from "../Input";
import { auth } from "../../api/auth";
import { loginUser } from "../../features/auth/auth.Slices";
import { useDispatch } from "react-redux";
import { setItems } from "../../helpers/localStorage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const fields = loginFields;
let fieldsState: { [x: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const dispatch = useDispatch();
  const handleChange = (e: { target: { id: string; value: string } }) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await auth.UserLogin("auth/login", loginState);
      if (response.error) {
        throw new Error(response.message);
      }
      dispatch(loginUser(response));
      setItems("token", response.token.token);
      setLoginState(fieldsState);
      navigate("/balance");
    } catch (error) {
      if (error) {
        Swal.fire({
          title: `${error}`,
          showConfirmButton: false,
          icon: "error",
          timer: 2000,
        });
      }
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra accountCreation={false} />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
