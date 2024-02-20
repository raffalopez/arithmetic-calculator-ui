/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

describe("Header component", () => {
  it("renders a heading", () => {
    const { getByText } = render(
      <Router>
        <Header heading="Test Heading" />
      </Router>
    );
    expect(getByText("Test Heading")).toBeInTheDocument();
  });

  it("renders a paragraph", () => {
    const { getByText } = render(
      <Router>
        <Header heading="Test Heading" paragraph="Test Paragraph" />
      </Router>
    );
    expect(getByText("Test Paragraph")).toBeInTheDocument();
  });

  it("renders a link", () => {
    const { getByText } = render(
      <Router>
        <Header
          heading="Test Heading"
          paragraph="Test Paragraph"
          linkName="Test Link"
          linkUrl="/test"
        />
      </Router>
    );
    expect(getByText("Test Link")).toHaveAttribute("href", "/test");
  });
});
