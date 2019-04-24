import React, { Component } from "react";
class TeacherCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer--teacherCard">
        <div
          className="mainContainer--teacherCard__imgContainer"
          style={{
            backgroundImage: `url(${this.props.imgUrl})`
          }}
        />
        <div className="mainContainer--teacherCard__textContainer">
          <p className="mainContainer--teacherCard__textContainer__name">
            Name
          </p>
          <p className="mainContainer--teacherCard__textContainer__profession">
            Profession
          </p>
          <p className="mainContainer--teacherCard__textContainer__hourlyRate">
            Hourly Rate
          </p>
        </div>
      </div>
    );
  }
}

export default TeacherCard;
