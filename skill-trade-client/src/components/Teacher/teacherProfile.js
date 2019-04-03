 import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(){
        super()
            this.state={
                name:"Professor ",
                description:
                "Working In the field of Science for about 10 years ",
                priceTitle:"Mentor Lesson",
                priceCost:"7.00",
                class:{
                  title:"Javascript",
                  desc:"focus on await"
                },
                show:false
            }

    }
    toggleExpandBox= ()=>{
      this.setState({
        show:!this.state.show
      })
    }
  render() {
    console.log(this.state.show)
    return (
      <div className="teacher">
          <div className="teacher__profileBox">
              <img className="teacher__profileImg" src="https://dummyimage.com/600x400/000/fff" alt='user-img' />
              <h1 className="teacher__profileName">Professor Foo </h1>
                <div className="teacher__infoBox">
                    <h1 className="teacher__bannerName"> About Us </h1>
                      <p className="teacher__infoBox--name">{this.state.name}</p>
                      <p className="teacher__infoBox--desc">{this.state.description}</p>
                      <button
                      onClick={this.toggleExpandBox}
                      className="teacher__infoBox--btn"> more Info
                      </button>
                </div>
              </div>
                <div className="teacher__priceInfo">
                    <p className="teacher__price--title">
                    {this.state.priceTitle}
                    </p>
                    <p className="teacher__price--cost">
                    ${this.state.priceCost}
                    </p>
                    <button className="teacher__price-btn">Book Now</button>
                </div>
              <div className="teacher__classes">
                  <p className="teacher__classes--title">
                    {this.state.class.title}
                  </p>
                  <p className="teacher__classes--desc">
                    {this.state.class.desc}
                  </p>
              </div>
      </div>
    )
  }
}
