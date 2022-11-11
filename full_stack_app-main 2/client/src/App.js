import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/Header";

import Courses from "./components/Courses";

import CourseDetail from "./components/CourseDetail";

// import CreateCourse from "./components/CreateCourse";
// import UpdateCourse from "./components/UpdateCourse";

// import UserSignUp from "./components/UserSignUp";
// import UserSignIn from "./components/UserSignIn";
// import UserSignOut from "./components/UserSignOut";

import withContext from "./Context";
// import PrivateRoute from "./PrivateRoute";

//with context
const CourseDetailWithContext = withContext(CourseDetail);

// const UserSignUpWithContext = withContext(UserSignUp); 
// const UserSignInWithContext = withContext(UserSignIn);

// const HeaderWithContext = withContext(Header);

// const CreateCourseWithContext = withContext(CreateCourse);
// const UpdateCourseWithContext = withContext(UpdateCourse);
// const UserSignOutWithContext = withContext(UserSignOut);
// const DeleteCourseWithContext = withContext(DeleteCourse);


const route = () => (
  <Router>
    <div>
    {/* <HeaderWithContext /> */}
      <Switch>
        <Route exact path="/" component={Courses} />
        {/* <PrivateRoute exact path="/courses/create"  component={CreateCourseWithContext} /> */}
        <Route exact path="/courses/:id" component={CourseDetailWithContext} />
        {/* <PrivateRoute exact path="/courses/:id/update" component={UpdateCourseWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <PrivateRoute path="/courses/:id/delete" component={DeleteCourseWithContext} /> */}
      </Switch>
    </div>
  </Router>
);

export default route