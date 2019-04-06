 import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(){
        super()
    }

  render() {
  
    return (
      <div className="teacher">
         <div className="profile">
           <img className="profile__img" src="https://www.directlink.coop/img/icons/avatars/145841-avatar-set/png/girl-1.png" alt="user-profile"/>
           <div className="profile__nameContainer">
             <h1 className="nameContainer--bannerName">Caroline Smith</h1>
           </div>
            <div className="profile__info">
              <p className="info--work">Full Stack Developer Mentor</p>
              <p className="info--location">Los Angeles</p>
            </div>
         </div>
         <div className="extras">
         <div className="priceInfo">
           <p className="priceInfo__type">
             Mentor Lesson
           </p>
           <p className="priceInfo__description">
            Javascript 30 min session
           </p>
           <p className="priceInfo__price">
            $7.00
           </p>
           <button className="priceInfo__btn">
             Book Now
           </button>
         </div>
         <div className="intro">
           <h1 className="intro__banner">Introduction</h1>
           <p className="intro__descripition">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only five centuries, but also the leap into 
           electronic typesetting, remaining essentially unchanged. It was popularised in 
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
           </p>
         </div>
         </div>
      </div>
    )
  }
}
