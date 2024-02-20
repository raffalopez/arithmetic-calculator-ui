/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, PageButton } from "./index";

describe("Button", () => {
  it("renders a button with children and class name", () => {
    const className = "my-button";
    const { getByRole } = render(
      <Button className={className}>Click me</Button>
    );
    const button = getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass(className);
  });

  it("calls a function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});

describe("PageButton", () => {
  it("renders a small button with children and class name", () => {
    const className = "my-page-button";
    const { getByRole } = render(
      <PageButton className={className}>Next page</PageButton>
    );
    const button = getByRole("button");
    expect(button).toHaveTextContent("Next page");
    expect(button).toHaveClass(className);
    expect(button).toHaveClass("px-2");
    expect(button).toHaveClass("py-2");
    expect(button).not.toHaveClass("px-4");
    expect(button).not.toHaveClass("py-8");
  });

  it("calls a function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <PageButton onClick={onClick}>Next page</PageButton>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
