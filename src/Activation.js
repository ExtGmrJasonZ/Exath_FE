import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Activation.css';
import TitleBar from './TitleBar.js';
import axios from 'axios';


class Activation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getActivationKey()
    }

    getActivationKey = () =>{
        axios.get(`http://exath.io/api/authenticate?key=${this.state.key}`)
        .then(res => {
            window.location.href = '/task';
        }, error => {
            // If key is invalid or something went wrong, change the input text value.
            document.getElementById('appKeyInput').value = 'INVALID KEY, Forbidden'
        })
    }
    
    componentDidMount(){}

    render(){
        return(
            <div>
                <div className="activation-container">
                    <div className="row pt-4">
                        <div className="exath-activation mx-auto"></div>   
                    </div>
                    <div className="row pt-3">
                        <div className="col-12">
                            <form>
                                <input
                                    id="appKeyInput"
                                    type="text"
                                    name= "key"
                                    onChange = {this.handleChange}
                                    value = {this.state.key}
                                    placeholder = "Enter your key"
                                    className="key_input"
                                    required
                                />
                            </form>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-3 ml-4"></div>
                        <Link className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Close</h1>
                        </Link>
            
                        <Link onClick={this.handleSubmit} className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Activate</h1>
                        </Link>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

	


export default Activation;