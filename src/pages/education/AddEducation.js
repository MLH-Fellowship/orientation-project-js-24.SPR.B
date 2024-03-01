import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components";
import { useAppContext } from "../../provider/ContextProvider";
import { educationFormList } from "../../constants.js";

export default function AddEducation() {
  const [pending, setIsPending] = useState(false);
  const [education, setEducation] = useState(null);

  const { data, setData } = useAppContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEducation((prevS) => ({ ...prevS, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      setIsPending(true);

      // const response = await axios.post(
      //   "http://localhost:8080/api/resume/education",
      //   education
      // );

      const logo = educationFormList.find((item) => item.id === "logo")?.value;

      await new Promise((resolve) => {
        setTimeout(() => {
          setData({
            ...data,
            education: [...data.education, { ...education, logo }],
          });
          resolve({
            id: data?.education?.length + 1,
          });
        }, 3000);
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="sectionContainer">
      <h1>Add Education</h1>
      <div className="resumeSection">
        <form className="form" onSubmit={handleAdd}>
          {educationFormList.map((item) => (
            <Input
              key={item.id}
              {...item}
              value={education?.[item.id] || item?.value || ""}
              handleChange={handleChange}
              required
            />
          ))}
          <button type="submit">
            {pending ? "Adding ..." : "Add Education"}
          </button>
        </form>
      </div>
    </div>
  );
}
