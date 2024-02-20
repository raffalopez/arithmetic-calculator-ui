/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Login from "./index";

describe("Login", () => {
  it("renders all input fields", () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("updates state when inputs change", () => {
    const { getByLabelText } = render(<Login />);
    fireEvent.change(getByLabelText("Email address"), {
      target: { value: "test@example.com" },
    });
    expect(getByLabelText("Email address")).toHaveValue("test@example.com");
  });
});
