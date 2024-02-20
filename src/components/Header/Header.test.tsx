import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("renders header with title", () => {
    render(<Header onSignOut={() => {}} />);
    expect(screen.getByText("Calculator App")).toBeInTheDocument();
  });

  it("triggers onSignOut when the sign out button is clicked", () => {
    const onSignOut = jest.fn();
    render(<Header onSignOut={onSignOut} />);
    fireEvent.click(screen.getByText("Sign Out"));
    expect(onSignOut).toHaveBeenCalled();
  });
});
