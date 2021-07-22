import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContext from './AppContext.js';
import TitleBar from './TitleBar.js';
import NavBar from './Navbar.js';
import Activation from'./Activation.js';
import Task from './Task.js';
import Profile from './Profile.js';
import Proxies from './Proxies.js';
import Captcha from './Captcha.js';
import Dashboard from './Dashboard.js';
import Settings from './Settings.js';

import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.setSessionStorageValue = this.setSessionStorageValue.bind(this)
    this.updateStateValue = this.updateStateValue.bind(this)
    this.checkAndValidateSession = this.checkAndValidateSession.bind(this)

    this.state = {
      isLoading: false,
      isAuthenticated: false,
      user: '',
      appKey: ''
    }
  }

  componentDidMount() {
    this.checkAndValidateSession()
  }

  componentDidUpdate() {
    this.checkAndValidateSession()
  }

  checkAndValidateSession() {
    if (this.isUserAndAppKeyExistsInSessionStorage()) {
      if (this.state.user !== window.sessionStorage.getItem('user') || 
      this.state.appKey !== window.sessionStorage.getItem('appKey') || 
      !this.state.isAuthenticated) {
        this.setState({
          user: window.sessionStorage.getItem('user'),
          appKey: window.sessionStorage.getItem('appKey'),
          isAuthenticated: true
        })
      }
    } else if (this.state.isAuthenticated)
      this.setState({isAuthenticated: false})
  }

  isUserAndAppKeyExistsInSessionStorage() {
    return (window.sessionStorage.getItem('user') !== null && window.sessionStorage.getItem('appKey') !== null)
  }

  setSessionStorageValue(key, value) {
    window.sessionStorage.setItem(key, value)
    this.updateStateValue(key, value)
  }

  updateStateValue(key, value) {
    this.setState({[key]: value})
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/">
              <Redirect to="/activation" />
            </Route>

            <Route exact path="/activation">
              { this.state.isAuthenticated
                ? <Redirect to="/task" />
                : <div style={{height:"100vh"}}>
                    <Activation setSessionStorageValue={this.setSessionStorageValue} />
                  </div>
              }
            </Route>

            <Route exact path="/task">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Task user={this.state.user} />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>
            
            <Route exact path="/profile">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Profile />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>

            <Route exact path="/proxies">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Proxies />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>

            <Route exact path="/captcha">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Captcha />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>

            <Route exact path="/dashboard">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Dashboard />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>

            <Route exact path="/settings">
              { this.state.isAuthenticated
                ? <div className="d-flex">
                    <NavBar checkAndValidateSession={this.checkAndValidateSession} />
                    <Settings />
                  </div>
                : <Redirect to="/activation" />
              }
            </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;
