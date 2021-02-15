import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Student from "./component/Student/Student.js";
import Posts from "./component/Posts/Posts.js";

const noResponds = () => {
  return <h1>404 - This Page not exist</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/student" exact component={Student} />
        <Route path="/Posts" exact component={Posts} />
        <Route component={noResponds} />
      </Switch>
    </Router>
    {/* <App /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
