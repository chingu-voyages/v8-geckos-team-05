import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import TeacherCard from "./teacherCard";
import MainContainer from "../MainContainer/mainContainer";

class TeacherSearch2 extends Component {
  state = {
    all: [],
    type:""
  };
  typeOfActivity(event){
    this.setState({
      type:event.target.value
    })

  }

  handlePictureSearch(e){
    let limitList = 30;
    let typeOfPicture = this.state.type;
    e.preventDefault();
    fetch(`https://api.unsplash.com/photos/random/?query=${typeOfPicture}&featured&count=${limitList}&client_id=1de021314b1360d29ebe9ac43c8388233b18f1aadd026e729e84a9fb355b6b46`)
    .then(res => res.json())
    .then( data =>{
      this.setState({
        all:data
      })
  
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <NavBar />
        <MainContainer>
          <h1 className="mainContainer__title">Teacher Search</h1>
          <div className="contentBox--teacherSearch">
            <div className="contentBox--teacherSearch__searchBar">
              <form onSubmit={(e)=> this.handlePictureSearch(e)}>
                <select
                  onChange={this.typeOfActivity.bind(this)}
                  className="contentBox--teacherSearch__searchBar__dropdown"
                  required
                >
                  <option value="">What do you want to learn?</option>
                  <option value="Coding">Coding</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Singing">Singing</option>
                  <option value="Spanish">Spanish</option>
                  <option value="English">English</option>
                  <option value="Piano">Piano</option>
                  <option value="Profile Picture">Other</option>
                </select>
                <input
                  type="submit"
                  className="contentBox--teacherSearch__searchBar__btnSearch"
                  value="Search"
                />
              </form>
            </div>
            <div className="contentBox--teacherSearch__resultsGrid">
              {this.state.all.map(friend => (
                <TeacherCard key={friend.id} imgUrl={friend.urls.thumb} /> //The key is just dummy information from the unsplash api response. To be modified when using real info.
              ))}
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default TeacherSearch2;
