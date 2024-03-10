import React, { useState } from "react";
import "./AddExperienceForm.css";

function AddExperienceForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const experienceData = {
      title,
      company,
      start_date: startDate,
      end_date: endDate,
      description,
      logo,
    };

    try {
      const response = await fetch("/resume/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Experience added with ID: ${result.id}`);
        onSubmit && onSubmit();
      } else {
        console.error(`Error adding experience: ${result.message}`);
      }
    } catch (error) {
      console.error(`There was a problem with the request: ${error.message}`);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="form-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        className="form-input"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        required
      />
      <input
        className="form-input"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
        required
      />
      <input
        className="form-input"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
        required
      />
      <textarea
        className="form-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        className="form-input"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        placeholder="Logo URL"
      />
      <button className="form-button" type="submit">
        Add Experience
      </button>
    </form>
  );
}

export default AddExperienceForm;
