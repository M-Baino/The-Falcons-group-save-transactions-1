import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import DashboardPage from "../dashboard/DashboardPage"



export default class LoginPage extends Component {

    state = { email: null, password: null  , data:[] , message:null}
    getData = (e) => {

        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state); })
    }
    loginMethod = () => {
        axios.post("http://localhost:3020/login", this.state).then((response) => { 
            if(typeof(response.data.transactionData) === "object")
            {
                // console.log(response.data)
                this.setState({data:response.data , message:""}) ;
                // console.log("Done");




            }
            else
            {
                this.setState({message:"Check On You Data"}) 
                

            }
            console.log(response)
    
    });


    }

    render() {
        return ( 
            <React.Fragment>
                <div>LoginPage</div>
                <input type="email" name="email" onChange={this.getData} placeholder="Enter your e-mail address"/>
                <input type="password" name="password" onChange={this.getData} placeholder="Enter your password"/>
                <button onClick={this.loginMethod}>OK</button>
                <div style={{color:"red"}}>{(this.state.message === "")?<Redirect to={{pathname:`/dash/${this.state.data.userID}` , state:this.state.data.transactionData}}/>:this.state.message}</div>
                
                <p>Don't have an account? <a href="#">Click Here</a></p>
                <a href="#">Forgot you password?</a>
                
            </React.Fragment>
        )
    }
}
