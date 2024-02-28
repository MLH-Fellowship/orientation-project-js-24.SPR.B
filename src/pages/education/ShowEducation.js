import { formatDate } from "../../utils";
import { useAppContext } from "../../provider/ContextProvider";

export default function ShowEducation() {
  const { data } = useAppContext();

  const educationData = data?.education;

  return (
    <>
      {educationData?.length ? (
        <ul className="sectionList">
          {educationData?.map((item, index) => {
            const { school, logo, course, grade, startDate, endDate } =
              item || {};
            return (
              <li className="list" key={index.toString()}>
                <div className="content">
                  <div className="">
                    <div className="logo">
                      <img src={logo} alt="school-logo" width="100%" />
                    </div>
                    <div className="title">{school}</div>
                    <div className="subTitle">
                      {course} - {grade}%
                    </div>
                    <span className="date">
                      {formatDate(startDate)} &mdash; {formatDate(endDate)}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Education Placeholder</p>
      )}
    </>
  );
}
