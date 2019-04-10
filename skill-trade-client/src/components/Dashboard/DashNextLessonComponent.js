/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const DashNextLessonComponent = () => {
  return (
    <div className="dashboard__nextLessonComponent">
      <div className="dashboard__nextLessonComponent__infoContainer">
        <span className="dashboard__nextLessonComponent__imageContainer">
          <img
            src="./dashboardProfilePicture.png"
            alt="Profile picture for the teacher of your next lesson"
            className="dashboard__nextLessonComponent__image"
          />
        </span>
        <div className="dashboard__nextLessonComponent__textContainer">
          <h2 className="dashboard__nextLessonComponent__header">Next Lesson</h2>
          <p className="dashboard__nextLessonComponent__teacherName">
            <strong>Snape</strong>
          </p>
          <p className="dashboard__nextLessonComponent__lessonName">
            <em>Potions</em>
          </p>
          <p className="dashboard__nextLessonComponent__lessonDateTime">
            Today - 5:30 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashNextLessonComponent;
