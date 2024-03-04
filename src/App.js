import React, { useState } from "react";
import Modal from "./components/Modal";
import AddSkillForm from "./views/Skills/AddSkillForm";
import "./App.css";

function App() {
  const [showSkillModal, setShowSkillModal] = useState(false);

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
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
        <button onClick={() => setShowSkillModal(true)}>Add Skill</button>
        <Modal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)}>
          <AddSkillForm />
        </Modal>
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
