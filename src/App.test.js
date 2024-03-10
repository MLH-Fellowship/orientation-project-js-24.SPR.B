import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import AddExperienceForm from "./views/Experience/AddExperienceForm";

describe("AddExperienceForm", () => {
  it("updates state on input change", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.click(getByText("Add Experience"));
    fireEvent.change(getByPlaceholderText("Title"), {
      target: { value: "Software Engineer" },
    });
    fireEvent.change(getByPlaceholderText("Company"), {
      target: { value: "Google" },
    });
    fireEvent.change(getByPlaceholderText("Start Date"), {
      target: { value: "01/01/2020" },
    });
    fireEvent.change(getByPlaceholderText("End Date"), {
      target: { value: "01/01/2021" },
    });
    fireEvent.change(getByPlaceholderText("Description"), {
      target: { value: "I did some things" },
    });
    fireEvent.change(getByPlaceholderText("Logo URL"), {
      target: { value: "http://logo.com" },
    });
    expect(getByPlaceholderText("Title")).toHaveValue("Software Engineer");
    expect(getByPlaceholderText("Company")).toHaveValue("Google");
    expect(getByPlaceholderText("Start Date")).toHaveValue("01/01/2020");
    expect(getByPlaceholderText("End Date")).toHaveValue("01/01/2021");
    expect(getByPlaceholderText("Description")).toHaveValue(
      "I did some things",
    );
    expect(getByPlaceholderText("Logo URL")).toHaveValue("http://logo.com");

    // TODO: Add other input checks for AddExperienceForm ...
  });
});
