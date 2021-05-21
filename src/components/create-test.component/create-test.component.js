import React from "react";

import "./create-test.styles.css";
const CreateTest = (props) => {
  return (
    <form className="form-control">
      <div className="create-test-heading">
        <div id="test-heading">
            <h3>-- Test Status --</h3>    
        </div>
        <div className="test-input">
          <div className="test-name">
            <label for="tname">Test Name :</label>
            <input
              type="text"
              value={props.TestName}
              id="fname"
              name="firstname"
              placeholder="Test name.."
            />
          </div>

          <div className="test-code">
            <label for="tcode">Test Code :</label>
            <input
              type="text"
              value={props.TestCode}
              id="tcode"
              name="firstname"
              placeholder="Test code.."
            />
          </div>

          <div className="total-question-uploaded">
            <label for="quploaded">Number of Questions Uploaded :</label>
            <input
              type="text"
              value={props.QuesUploaded}
              id="quploaded"
              name="firstname"
              placeholder="Number of questions uploaded.."
            />
          </div>

          <div className="total-question-attempted">
            <label for="qattempted">Number of Questions Attempted :</label>
            <input
              type="text"
              value={props.QuesAttempted}
              id="qattempted"
              name="firstname"
              placeholder="Your name.."
            />
          </div>

          <div className="test-time-duration">
            <label for="tduration">Test Time Duration :</label>
            <input
              type="text"
              value={props.TestDuration}
              id="tduration"
              name="firstname"
              placeholder="Test duration.."
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
