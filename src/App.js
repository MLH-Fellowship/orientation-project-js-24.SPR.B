import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import AddExperienceForm from "./views/Experience/AddExperienceForm";
import "./App.css";

function App() {
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <button onClick={() => setShowExperienceModal(true)}>
          Add Experience
        </button>
        <Modal
          isOpen={showExperienceModal}
          onClose={() => setShowExperienceModal(false)}
        >
          <AddExperienceForm />
        </Modal>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button>Add Education</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
