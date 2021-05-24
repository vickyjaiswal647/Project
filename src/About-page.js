import React , {useState} from 'react';
import {Link} from 'react-router-dom';

import './About-page.css';



const Profile = () => {

    const [data, setData] = useState({
        name : 'Boostmind',
        email : 'abc123@gmail.com',
        semester : '1',
        branch : 'CSE',
        score : '10',
        userdescription : 'Software Developer',
        IsAdmin : true,
        imgsrc : "https://img-a.udemycdn.com/user/200_H/5520600_d346.jpg?_WSOq_vRPSQdMKFalIcXpQfpy5tI-uPWCIULQ7rl5vWNOEFpjQD74FT68_cVYfsZAfNenIC-X28qaJ4OwNNjfJNLUlEzX1il07lx1AoqfjNCHLmXtOkiMZs5"
    });

    return (
        <>
            <div className="container stu-profile">
                <div className="heading">
                    <h4>PROFILE</h4>
                    <span style={{fontStyle: "italic"}} >Information About Yourself</span>
                </div>
                <form method="">
                    
                    <div className="row"></div>
                    <div className="row">
                        <div className="col">
                            <div className="profile-img">
                                <img 
                                    id="profile-img"
                                    src={data.imgsrc}
                                    alt="UserPicture" 
                                />
                            </div>
                            
                        </div>

                        <div className="col">

                            <div className="profile-head">
                                <h5>{data.name}</h5>
                                <h6>{data.userdescription}</h6>
                                <p className="profile-rating">SCORE :<span> {data.score} </span></p>
                            </div>

                        </div>

                        <div className="col">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="row">
                        {/* left side url */}
                        <div className="col">
                            <div className="profile-work">
                                <p> Navigate Pages </p>
                                {data.IsAdmin ? (
                                    <>
                                    
                                    <Link className="link-option" to="/create-course">Create Course</Link><br/>
                                    <Link className="link-option" to="video-upload-page">Upload Video</Link><br/>
                                    <Link className="link-option" to="/show-result">Show Result</Link><br/>
                                    <Link className="link-option" to="/create-test">Create Test</Link><br/>
                                    <Link className="link-option" to="activate-test">Take Test</Link><br/>
                            
                                    
                                  
                                    </>
                                ) : (
                                    <>
                                    <Link className="link-option" to="/profile-page">Profile</Link><br/>
                                    <Link className="link-option" to="/profile-photo">Photo</Link><br/>
                                    <Link className="link-option" to="/start-test">Start Test</Link><br/>
                                    <Link className="link-option" to="/your-course">Your Course</Link>
                                    
                                    </>
                                )}

                                
                                
                            </div>
                        </div>

                        {/* right side data toggle */}
                        <div className="col"></div>
                        <div className="col">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="">
                                    
                                    <div className="row">
                                        <div className="col">
                                            <label>Name :</label>
                                        </div>
                                        <div className="col">
                                            <label>{data.name}</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label>Email :</label>
                                        </div>
                                        <div className="col">
                                            <label>{data.email}</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label>Semester :</label>
                                        </div>
                                        <div className="col">
                                            <label>{data.semester}</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label>Branch :</label>
                                        </div>
                                        <div className="col">
                                            <label>{data.branch}</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> 

                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;