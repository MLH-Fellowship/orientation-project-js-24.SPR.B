import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { AddEducation, ShowEducation } from "./pages";
import { ContextProvider } from "./provider/ContextProvider";

import "./App.css";

const Home = () => {
  const navigate = useNavigate();

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
        <ShowEducation />
        <button onClick={() => navigate("/education/add")}>
          Add Education
        </button>
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
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/education",
    children: [
      {
        path: "add",
        element: <AddEducation />,
      },
    ],
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
