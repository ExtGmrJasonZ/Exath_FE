import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import './css/Task.css';
import {useState} from "react";
import Task from './Task.js';
import Activation from'./Activation.js';


import { Link } from 'react-router-dom';

function App() {
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Router>
    {/* Panel Navbar */}

        <div className="panel-background">
            {/* Exath Logo */}
            <div className="exath-logo">
            </div>

            {/* Task Panel */}
            <Link to="/task" className="task-panel">
            </Link>

            <div className="task-logo">
            </div>

            <h1 className= "task-button">Tasks</h1>
            {/* Profile Panel */}
            <button className="profile-panel">
            </button>
            
            <div className="profile-logo">
            </div>

            <h1 className= "profile-button">Profiles</h1>
            {/* Proxies Panel */}
            <button className="proxies-panel">
            </button>
            
            <div className="proxies-logo">
            </div>

            <h1 className= "proxies-button">Proxies</h1>
            {/* Captcha Panel */}
            <button className="captcha-panel">
            </button>
            
            <div className="captcha-logo">
            </div>

            <h1 className= "captcha-button">Captcha</h1>
            {/* Dashboard Panel */}
            <button className="dashboard-panel">
            </button>
            
            <div className="dashboard-logo">
            </div>

            <h1 className= "dashboard-button">Dashboard</h1>
            {/* Settings Panel */}
            <button className="settings-panel">
            </button>
            
            <div className="settings-logo">
            </div>

            <h1 className= "settings-button">Settings</h1>
            {/* Version Panel */}
            <h1 className= "version-number">2.0.1</h1>
        </div>
    
        

       <Switch>
            
            <Route exact path="/activation">
                <Activation />
            </Route>
           
           <Route exact path="/task">
                <Task />
           </Route>
           
       </Switch>
    </Router>
  );
}

export default App;
