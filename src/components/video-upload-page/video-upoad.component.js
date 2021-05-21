import React ,{Component} from "react";

import "./video-upload.styles.css";


class VideoUploadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: "",
      
    };

    this.handleUploadVideo = this.handleUploadVideo.bind(this);
  }

  handleUploadVideo(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:8000/users/admin/upload-viedo", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ videoURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadVideo} className="form-control">
        <div className="form-heading">
          <h2>Upload Video</h2>
          <div className="form-input">
            <div className="select-semester">
              <label className="labell-name" for="semester">
                <h4>Semester</h4>
              </label>
              <select id="semester" name="semester">
                <option value="--Select Semester">--Select Semester--</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
            
            <div className="select-subject">
              <label className="labell-name" for="subject">
                <h4>Subject</h4>  
              </label>
              <select id="subject" name="subject">
                <option value="--Select subject">--Select Subject--</option>
                <option value="pps">PPS</option>
                <option value="dsa">Data Structure and Algorithm</option>
                <option value="daa">Design and Analysis of Algorithm</option>
                <option value="oop">Object Oriented Programming</option>
                <option value="os">Operating System</option>
                <option value="itm">Internet Technology and Management</option>
                <option value="dbms">DBMS</option>
                <option value="maths">Mathematics</option>
                <option value="phy">Physics</option>
                <option value="che">Chemistry</option>
                <option value="bio">Biology</option>
                <option value="egd">Engineering Graphics and Design</option>
                <option value="eng">English</option>
                <option value="bee">Basic Electrical Engineering</option>
                <option value="de">Digital Electronics</option>
                <option value="ob">Organizational Behaviour</option>
                <option value="bie">Business Intelligence and Entrepreneurship</option>
                <option value="flat">Formal language & Automata Theory</option>
                <option value="mpi">MicroProcessor & Interfacing</option>
                <option value="coa">Computer Organization & Architecture</option>
                <option value="cd">Compiler Design</option>
                <option value="cn">Computer Network</option>
                <option value="eit">Essentials of Information Technology</option>
                <option value="ppl">Principle of Programming Language </option>
                <option value="ssic">Soft Skills & interpersonal Communication</option>
                <option value="ulp">Unix & Linux Programming </option>
              </select>
            </div>
            <div className="input-upload-file ">
              <label className="labell-name">
                <h4>Select the File</h4>
              </label>
              <input
                id="file-select"
                ref={(ref) => {
                  this.uploadInput = ref;
                }}
                type="file"
              />
            </div>

            <div className="input-upload-name">
              <label className="labell-name">
                <h4>Name the File</h4>
              </label>
              <input
                
                ref={(ref) => {
                  this.fileName = ref;
                }}
                type="text"
                placeholder="Enter the desired name of file"
              />
            </div>
            <br />
            <div>
              <button className="upload-button">Upload</button>
            </div>
            <video>
              <source src={this.state.videoURL} alt="video" />
            </video>
          </div>
        </div>
      </form>
    );
  }
}

export default VideoUploadPage;
