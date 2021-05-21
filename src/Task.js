import React from 'react';
import './css/Task.css';
import App from './App.js';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import IndividualTask from './IndividualTask.js';

import play_button from "./assets/icons/start_all_logo.png";
import stop_button from "./assets/icons/stop_task_logo.png";
import edit_button from "./assets/icons/edit_task_logo.png";
import delay_button from "./assets/icons/edit_delay_logo.png";
import quick_task_button from "./assets/icons/quick_task_logo.png";
import delete_button from "./assets/icons/delete_task.png";
import create_button from "./assets/icons/create_task_logo.png";

import table_play from "./assets/icons/table_play.png";
import table_stop from "./assets/icons/table_stop.png";
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

import TitleBar from './TitleBar.js';

class Task extends React.Component{
   constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){

  }

  render(){
	return(
        <div className="task">
            <TitleBar/>
            <div className="tasks-container pt-0">
                <div className="control-panel-wrapper row mx-auto">
                    <div className="left-control-panel col-2 pt-3">
                        <h1 className="text-center">Tasks</h1>
                        <p className="clock text-center">12:12:59</p>
                    </div>
                    <div className="middle-control-panel col-4 pt-3">
                        <p className="welcome-message m-0">Welcome, <b>Bluu#1234</b></p>
                        <p className="m-0">Tasks - <span style={{color: '#F6FB06'}}>10</span></p>
                        <p className="m-0" >Running Tasks - <span style={{color: '#0DFE5F'}}>9</span></p>
                    </div>
                    <div className="col-1"></div>
                    <div className="right-control-panel col-5">
                        <ul className="icons-wrapper ml-5">
                            <li className="icon"><Link><img src={play_button} /></Link></li>
                            <li className="icon"><Link><img src={stop_button} /></Link></li>
                            <li className="icon"><Link to="/edit_all_task"><img src={edit_button} /></Link></li>
                            <li className="icon"><Link to="/delay_task"><img src={delay_button} /></Link></li>
                            <li className="icon"><Link to="/quick_task"><img src={quick_task_button} /></Link></li>
                            <li className="icon"><Link><img src={delete_button} /></Link></li>
                            <li className="icon"><Link to ="/create_task"><img src={create_button} /></Link></li>
                        </ul>
                    </div> 
                </div>
                <div className="row pt-1"></div>
                <div className="table-heading row mx-auto pt-2">
                    <div className="table-heading-wrapper">
                        <div className="table row">
                            <div className="col-2 pt-2">
                                <h1 className="headings text-center">Site</h1>
                            </div>

                            <div className="col-1 pt-2">
                                <h1 className="headings text-center">Size</h1>
                            </div>

                            <div className="col-2  pt-2">
                                <h1 className="headings text-center">Product</h1>
                            </div>

                            <div className="col-2 pt-2">
                                <h1 className="headings text-center">Profile</h1>
                            </div>

                            <div className="col-1 pt-2">
                                <h1 className="headings text-center">Proxies</h1>
                            </div>

                            <div className="col-2 pt-2">
                                <h1 className="headings text-center">Status </h1>
                            </div>

                            <div className="col-2 pt-2">
                                <h1 className="headings text-center">Actions</h1>
                            </div>
                        </div>
                        {/*IndividualTask*/}
                        <IndividualTask/>
                        {/*IndividualTask*/}
                    
                
                    </div>

                
                </div>
            </div>
        </div>
	);

    }
	

}

export default Task;


