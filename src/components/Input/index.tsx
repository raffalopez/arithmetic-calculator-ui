import { useState } from "react";
import { ReactComponent as Visibility } from "../../assets/visibility.svg";
import { ReactComponent as VisibilityOff } from "../../assets/visibilityOff.svg";

interface IInput {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder: string;
  customClass?: string;
  isPassword?: boolean;
}

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-sky-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm";

const iconPasswordClass = "absolute bottom-2 right-3";

const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  isPassword = false,
}: IInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="my-5 relative">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={showPassword ? "text" : type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
      {type === "password" && (
        <>
          {showPassword ? (
            <Visibility
              className={iconPasswordClass}
              onClick={handleVisibility}
            />
          ) : (
            <VisibilityOff
              className={iconPasswordClass}
              onClick={handleVisibility}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
