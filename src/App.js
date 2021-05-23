import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./container/form/login";
import SignUp from "./container/form/signup";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./container/Body/groupCard";
import CSEpage from './container/Body/CSE-Page/cse.page.component';
import CSEsemester1 from './container/Body/cse-semester1/cse.semester1.component';
import ProfilePage from './container/profile-page/profile-page.component';
import VideoUploadPage from './container/profile-page/side-navbar/List-Options-Pages/video-upload-page/video-upoad.component';
import CreateTestPage from './container/profile-page/side-navbar/List-Options-Pages/create-test.component/create-test.component';
import ActivateTest from './container/profile-page/side-navbar/List-Options-Pages/Activate/Activate';
import CreateCourse from './container/profile-page/side-navbar/List-Options-Pages/Create-Course/create-course.component';
import StartTest from './container/profile-page/side-navbar/List-Options-Pages/MCQ-Page/Mcq-page.component';
import ScorePage from './components/Score-Page/Score';
import ShowResult from './container/profile-page/side-navbar/List-Options-Pages/Result 1/Result1';
//import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';

class App extends Component {

 
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot((snapShot) => {
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data(),
  //           },
  //         });
  //         console.log(this.state);
  //       });
  //     }
  //     this.setState({ currentUser: userAuth });
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Body} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/cse" component={CSEpage} />
            <Route path="/cse-semester1" component={CSEsemester1} />
            <Route path = '/video-upload-page' component={VideoUploadPage}/>
            <Route path = '/your-course' component={CSEsemester1}/>
            <Route path = '/create-test' component={CreateTestPage}/>
            <Route path = '/activate-test' component={ActivateTest}/>
            <Route path = '/start-test' component={StartTest}/>
            <Route path = '/create-course' component={CreateCourse}/>
            <Route path = '/score-page' component={ScorePage} />
            <Route path = '/show-result' component={ShowResult} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
