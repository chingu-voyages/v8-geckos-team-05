import React, {Component} from 'react'

export default class TeacherSearch extends Component {
    render() {
        return (
            <div className="teacherSearch">
                <div className="search">
                    <input className="search__input" type="text" name="teacher__input"/>
                    <button className="search__btn">
                       <img className="search__btn--img"src="https://cdn0.iconfinder.com/data/icons/30-hardware-line-icons/64/Search-512.png"/>
                    </button>
                </div>
                <div className="searchResults">
                    <h1 className="searchResults__number">
                        Results:9999
                    </h1>
                    <div className="resultsBoxes">
                        <div className="teacherInfo">
                          <h1 className="teacherInfo__name">Jarred Killeen</h1>
                          <p className="teacherInfo__type">Computer Science Engineer </p>
                          <p className="teacherInfo__price">$23.00</p>
                        </div>
                        <div className="teacherInfo">
                          <h1 className="teacherInfo__name">Louis McKelloch</h1>
                          <p className="teacherInfo__type">Guitar</p>
                          <p className="teacherInfo__price">$12.00</p>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}
