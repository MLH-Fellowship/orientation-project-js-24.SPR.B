import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import AddSkillForm from "./views/Skills/AddSkillForm";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders Resume Builder heading", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Resume Builder/i)).toBeInTheDocument();
  });

  // TODO: Add more App-level tests if necessary ...
});

describe("AddSkillForm", () => {
  it("updates state on input change", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.click(getByText(/Add Skill/i));
    fireEvent.change(getByPlaceholderText("Skill Name"), {
      target: { value: "JavaScript" },
    });
    fireEvent.change(getByPlaceholderText("Proficiency"), {
      target: { value: "2-4 years" },
    });
    fireEvent.change(getByPlaceholderText("Logo URL"), {
      target: { value: "https://example.com/logo.png" },
    });

    // TODO: Add other input checks for AddSkillForm ...
  });
});
