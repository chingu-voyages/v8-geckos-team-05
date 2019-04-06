import React, { Component } from "react";

class DashUpcomingComponent extends Component {
  render() {
    const { lessons } = this.props;

    const lessonsDivs = lessons.map((lesson, i) => (
      <div className="dashboard__upcomingLessonsComponent__lesson" key={i}>
        <span className="dashboard__upcomingLessonsComponent__lesson__imageContainer">
          <img
            src={lesson.profilePic}
            alt=""
            className="dashboard__upcomingLessonsComponent__lesson__image"
          />
        </span>
        <div className="dashboard__upcomingLessonsComponent__lesson__textContainer">
          <p className="dashboard__upcomingLessonsComponent__lesson__teacherName">{lesson.teacherName}</p>
          <p className="dashboard__upcomingLessonsComponent__lesson__lessonName"><em>{lesson.lessonName}</em></p>
          <p className="dashboard__upcomingLessonsComponent__lesson__dateTime">{lesson.dateTime}</p>
        </div>
      </div>
    ));

    return (
      <div className="dashboard__upcomingLessonsComponent">
        <h2 className="dashboard__upcomingLessonsComponent__header">Upcoming Lessons</h2>
        {lessonsDivs}
      </div>
    );
  }
}

export default DashUpcomingComponent;
