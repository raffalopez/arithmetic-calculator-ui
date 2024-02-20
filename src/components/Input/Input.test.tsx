/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
  const handleChange = jest.fn();

  const defaultProps = {
    handleChange,
    value: "",
    labelText: "Email",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  };

  it("should render correctly with default props", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    expect(getByLabelText("Email")).toBeInTheDocument();
  });

  it("should call handleChange when the input value changes", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    const input = getByLabelText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should render with required attribute", () => {
    const { getByLabelText } = render(
      <Input {...defaultProps} isRequired={true} />
    );
    const input = getByLabelText("Email");
    expect(input).toBeRequired();
  });
});
