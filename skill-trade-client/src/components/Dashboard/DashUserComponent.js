/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const DashUserComponent = () => {
  return (
    <div className="dashboard__userComponent">
        <div className="dashboard__userComponent--imageContainer">
            <img src="./dashboardProfilePicture.png" alt="User's profile picture" srcset="" className="dashboard__userComponent--image"/>
        </div>
        <p className="dashboard__userComponent--username"><strong>Chris</strong></p>
    </div>
  )
}

export default DashUserComponent
