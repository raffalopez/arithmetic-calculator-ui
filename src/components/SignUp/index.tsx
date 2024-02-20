import { useState } from "react";
import { signUpFields } from "../../helpers/constants";
import FormAction from "../FormAction";
import FormExtra from "../FormExtra";
import Input from "../Input";
import { auth } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const fields = signUpFields;
let fieldsState: { [x: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [SignUpState, setSignUpState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e: { target: { id: string; value: string } }) => {
    setSignUpState({ ...SignUpState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await auth.SignUp("users", SignUpState);
      if (response.error) {
        throw new Error(response.message);
      }
      if (response.errors) {
        throw new Error(response.errors[0].message);
      }
      setSignUpState(fieldsState);
      if (response) {
        navigate("/");
      }
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
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={SignUpState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormExtra accountCreation={true} />
      <FormAction handleSubmit={handleSubmit} text="SignUp" />
    </form>
  );
}
