import React from 'react';
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import contactMain from '../Contacts/contactsMain.jsx';
import teacherProfile from '../Teacher/teacherProfile';
import teacherSearch from '../Teacher/teacherSch'
export default function Index(){
    return(
        <Router>
        <div>
            <Switch> 
                <Redirect exact from="/" to="/home" />
                <Route exact path="/contacts" component={contactMain} />
                <Route exact path="/teacherProfile" component={teacherProfile} />
                <Route exact path="/teacherSearch" component={teacherSearch} />
            </Switch>      
        </div>
        </Router>
    )
}