import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Home extends Component {
  render() {
      console.log('this.props.state', this.props.state)
    return (
      <div>
     <Link to="/dash" >dash</Link><br></br>
     <Link to={"/details"}>DetailsPage</Link><br></br>
      <Link to={"/login"}>Log in</Link><br></br>
      <Link to={"/register"}>register</Link>
        <h1>Home</h1>
      </div>
    )
  }
}
