import React, { Component } from "react";

import "./question-page.styles.css";
class CreateTest extends Component {

    state = {
        testcode: '',
        quesOptionA: '',
        quesOption2: '',
        quesOption3: '',
        quesOption4: '',
        clicked: false

    }

    componentDidMount() {
        fetch('')
          .then(response => response.json())
          .then(this.setState({quesOptionA : 'Hello'}))
      }

    setOption = (event) => {
        this.setState({ clicked: event.target.value });
    }
  render() {
    return (
      <form className="form-control" >
        <div className="create-ques-heading">
          <div id="test-heading">
            Test Code : 
          </div>

          <div className="ques-input">
            <div className="ques-statement">
              <label for="qname">Question :</label>
              <textarea
                className="text-area-input"
                type="text"
                value=""
                id="qname"
                name="qname"
                placeholder="Question description.."
              />
            </div>

            <div className="ques-option" >
              <label for="qname">Options :</label>
              <br />
              <br />
              <div>
                A
                <input type="radio" name="radio" value="" onClick={this.setOption}/>
                <input
                  className="ques-options"
                  type="text"
                  value={this.state.quesOption1}
                  id="qoption"
                  name="qoption"
                  placeholder="Option A.."
                />
              </div>
              <div>
                B
                <input type="radio" name="radio" value="" onClick={this.setOption}/>
                <input
                  className="ques-options"
                  type="text"
                  value={this.state.quesOption2}
                  id="qoption"
                  name="qoption"
                  placeholder="Option A.."
                />
              </div>
              <div>
                C
                <input type="radio" name="radio" value="" onClick={this.setOption}/>
                <input
                  className="ques-options"
                  type="text"
                  value={this.state.quesOption3}
                  id="qoption"
                  name="qoption"
                  placeholder="Option A.."
                />
              </div>
              <div>
                D
                <input type="radio" name="radio" value="" onClick={this.setOption}/>
                <input
                  className="ques-options"
                  type="text"
                  value={this.state.quesOption4}
                  id="qoption"
                  name="qoption"
                  placeholder="Option A.."
                />
              </div>
            </div>

          </div>
          <div className="submit-button">
          <button type="submit" id="add-ques">Add more question</button>
          <button type="submit" id="submit-button">Submit Answer</button>
            </div>
        </div>
      </form>
    );
  }
}

export default CreateTest;
