/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewOperationForm from "./index";

describe("NewOperationForm", () => {
  it("renders the form with input fields and a submit button", () => {
    const { getByLabelText, getByText } = render(
      <NewOperationForm balance={10} setBalance={() => {}} />
    );
    expect(getByLabelText("Number 1")).toBeInTheDocument();
    expect(getByLabelText("Number 2")).toBeInTheDocument();
    expect(getByLabelText("Operation")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("updates the state on input change", () => {
    const { getByLabelText } = render(
      <NewOperationForm balance={10} setBalance={() => {}} />
    );
    const num1Input = getByLabelText("Number 1");
    const num2Input = getByLabelText("Number 2");
    const operationSelect = getByLabelText("Operation");
    fireEvent.change(num1Input, { target: { value: 10 } });
    fireEvent.change(num2Input, { target: { value: 5 } });
    fireEvent.change(operationSelect, { target: { value: "-" } });
    expect(num1Input).toHaveValue(10);
    expect(num2Input).toHaveValue(5);
    expect(operationSelect).toHaveValue("-");
  });
});
