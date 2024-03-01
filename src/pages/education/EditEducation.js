import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppContext } from "../../provider/ContextProvider";
import { Input } from "../../components";
import { educationFormList } from "../../constants";

export default function EditEducation() {
  const [pending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { data, setData } = useAppContext();

  const [education, setEducation] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const pageId = parseInt(params?.id);

  const educationData = data?.education;

  useEffect(() => {
    const getEducationdata = educationData?.[pageId];
    setEducation(getEducationdata);
  }, [educationData, pageId]);

  const handleChange = (e) => {
    setEducation((prevS) => ({ ...prevS, [e.target.name]: e.target.value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      setIsPending(true);

      // const response = await axios.put(
      //   `http://localhost:8080/api/resume/education/${pageId}`,
      //   education
      // );

      await new Promise((resolve) => {
        setTimeout(() => {
          const dataBefore = educationData?.slice(0, pageId);
          const dataAfter = educationData?.slice(pageId + 1);
          setData({
            ...data,
            education: [...dataBefore, education, ...dataAfter],
          });

          resolve({
            id: pageId,
          });
        }, 3000);
      });

      navigate("/");
    } catch (error) {
      setError(error?.message || "An error occurred");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="sectionContainer">
      <h1>Edit Education</h1>
      <div className="resumeSection">
        {education ? (
          <form className="form" onSubmit={handleEdit}>
            {educationFormList.map((item) => (
              <Input
                key={item.id}
                {...item}
                value={education?.[item.id] || ""}
                handleChange={handleChange}
                required
              />
            ))}
            <button type="submit">
              {pending ? "Editing ..." : "Edit Education"}
            </button>
            {error && <span className="error">{JSON.stringify(error)}</span>}
          </form>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
}
