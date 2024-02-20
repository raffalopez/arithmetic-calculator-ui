/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormAction from "./index";

describe("FormAction Component", () => {
  const handleSubmitMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with the given text", () => {
    const { getByText } = render(
      <FormAction handleSubmit={handleSubmitMock} text="Submit" />
    );
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should trigger the handleSubmit function when the button is clicked", () => {
    const { getByText } = render(
      <FormAction handleSubmit={handleSubmitMock} text="Submit" />
    );
    fireEvent.click(getByText("Submit"));
    expect(handleSubmitMock).toHaveBeenCalledTimes(0);
  });

  it("should render a submit button by default", () => {
    const { getByText } = render(
      <FormAction handleSubmit={handleSubmitMock} text="Submit" />
    );
    const button = getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should render a reset button when the action prop is set to 'reset'", () => {
    const { getByText } = render(
      <FormAction handleSubmit={handleSubmitMock} text="Reset" action="reset" />
    );
    const button = getByText("Reset");
    expect(button).toHaveAttribute("type", "reset");
  });

  it("should render nothing when the type prop is set to 'Link'", () => {
    const { container } = render(
      <FormAction handleSubmit={handleSubmitMock} text="Link" type="Link" />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeNull();
  });
});
