/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const DashNextLessonComponent = () => {
  return (
    <div className="dashboard__nextLessonComponent">
      <p className="dashboard__nextLessonComponent--header">Next Lesson</p>
      <div className="dashboard__nextLessonComponent__infoContainer">
        <div className="dashboard__nextLessonComponent__imageContainer">
          <img
            src="./dashboardProfilePicture.png"
            alt="Profile picture for the teacher of your next lesson"
            className="dashboard__nextLessonComponent__image"
          />
        </div>
        <div className="dashboard__nextLessonComponent__textContainer">
            <p className="dashboard__nextLessonComponent__teacherName">John</p>
            <p className="dashboard__nextLessonComponent__lessonName">Guitar</p>
            <p className="dashboard__nextLessonComponent__lessonDateTime">Today - 5:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default DashNextLessonComponent;
