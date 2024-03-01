import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils";
import { useAppContext } from "../../provider/ContextProvider";

import editIcon from "../../assets/images/edit-icon.svg";
import reorderIcon from "../../assets/images/reorder-icon.svg";

export default function ShowEducation() {
  const draggingPos = useRef(null);
  const dragOverPos = useRef(null);

  const [isDraggedIndex, setIsDraggedIndex] = useState(null);
  const [isDraggedEnterIndex, setIsDraggedEnterIndex] = useState(null);

  const { data, setData } = useAppContext();

  const educationData = data?.education;

  const handleDragStart = (position) => {
    draggingPos.current = position;
  };

  const handleDragEnter = (position) => {
    dragOverPos.current = position;
  };

  const handleDragEnd = (position) => {
    const newItems = [...data?.education];
    const draggingItem = newItems[draggingPos.current];
    if (!draggingItem) return;

    newItems.splice(draggingPos.current, 1);
    newItems.splice(dragOverPos.current, 0, draggingItem);

    const reorderedItems = newItems.map((item, index) => ({
      ...item,
      order: index,
    }));

    draggingPos.current = position;
    dragOverPos.current = null;

    setData({
      ...data,
      education: reorderedItems,
    });
  };

  return (
    <>
      {educationData?.length ? (
        <ul className="sectionList">
          {educationData?.map((item, index) => {
            const { school, logo, course, grade, startDate, endDate } =
              item || {};
            return (
              <li
                key={index.toString()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {isDraggedEnterIndex !== isDraggedIndex &&
                  isDraggedEnterIndex === index && (
                    <div
                      className="draggedItem"
                      onDragOver={(e) => {
                        e.preventDefault();
                      }}
                      style={{
                        order:
                          isDraggedEnterIndex <= isDraggedIndex ? "1" : "2",
                      }}
                    />
                  )}
                <div
                  className="list"
                  style={{
                    display: isDraggedIndex === index ? "none" : "block",
                    order: isDraggedEnterIndex <= isDraggedIndex ? "2" : "1",
                  }}
                  draggable
                  onDrag={() => {
                    setIsDraggedIndex(index);
                  }}
                  onDragStart={() => {
                    handleDragStart(index);
                  }}
                  onDragEnter={() => {
                    handleDragEnter(index);

                    setIsDraggedEnterIndex(index);
                  }}
                  onDragEnd={() => {
                    handleDragEnd(index);

                    setIsDraggedEnterIndex(null);
                    setIsDraggedIndex(null);
                  }}
                >
                  <div className="content">
                    <div className="imageDescWrap">
                      <div className="reorderIcon">
                        <img src={reorderIcon} alt="reorder-icon" />
                      </div>
                      <div className="logo">
                        <img src={logo} alt="school-logo" width="100%" />
                      </div>
                      <div>
                        <div className="title">{school}</div>
                        <div className="subTitle">
                          {course} - {grade}%
                        </div>
                        <span className="date">
                          {formatDate(startDate)} &mdash; {formatDate(endDate)}
                        </span>
                      </div>
                    </div>
                    <div className="actionIcons">
                      <Link to={`/education/edit/${index}`}>
                        <img src={editIcon} alt="edit-icon" />
                      </Link>
                    </div>
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
