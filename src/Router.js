import React from 'react';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import Main2 from './Main2';
import Courses from './admin/courses';
import Dashboard from './admin/dashboard';
// import Edit from './admin/edit';
import Dashboards from './bDashboard';
import User from './admin/Users';
import PasswordReset from './Password_reset';
import Contact from './Contact';
import Pseah from './Pseah';
// import ChildProtection from './ChildProtection';
import Check2 from './check2';
import Emailconfirm from './EmailConfirm';
const Routes=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Main2}/>
                <Route exact path="/aCourses" component={Courses}/> 
                <Route exact path="/passwordReset/:id" component={PasswordReset}/>
                <Route exact path="/aDashboard" component={Dashboard}/>
                <Route exact path="/aUsers" component={User} />
                <Route exact path="/childProtect" component={Check2}/>
                <Route exact path="/email_confirm/:id" component={Emailconfirm}/>
                <Route exact path="/Pseah" component={Pseah}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/dashboard" component={Dashboards}/>
                
            </Switch>
        </Router>
    )
}
export default Routes;