import React, { Component } from "react";

import SemesterCardList from "../semester-card-list/semester.card-list.component";

class Pages extends Component {
  state = {
    semester: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ semester: users }));
  }

  selectSemesterHandler () {
    
  }

  render() {
    const { semester } = this.state;
    const filteredSemester = semester.filter((semester) => semester.name);

    return (
      <div>
        <SemesterCardList
          semester={filteredSemester}
          onClick={this.selectSemesterHandler}
        />
      </div>
    );
  }
}

export default Pages;
