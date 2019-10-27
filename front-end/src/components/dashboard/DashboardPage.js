import React, { Component } from 'react'
import ConfirmationPage from '../confirmations/ConfirmationPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleInfoForm from '../forms/VehicleInfoForm';
import {Link} from "react-router-dom"
import cookie from "react-cookies"
import axios from "axios"
export default class DashboardPage extends Component {
    state ={
        signInEmail : null,
        ownerTransactionEmail : null,
        secondPartyEmail : null,
        initConfVehicle :[],
        userTransactions:[],
        userid : cookie.load("isLoggedIn")
    }
  



 
    // componentWillMount(){


    //          let userid = cookie.load("isLoggedIn");
    //             axios.get(`http://localhost:3020/dashboard/${userid}`).then((response)=>{this.setState({initConfVehicle:response.data})})

        
    // }


    componentDidMount(){

        // let userid = cookie.load("isLoggedIn");
axios.get(`http://localhost:3020/dashboard/${this.state.userid}`)
.then((response)=>{this.setState({initConfVehicle:response.data})})

   
}

    validationFunction=()=>{
        this.props.userInfo.map(userItem=>{ //user state
            this.setState({
                signInEmail : userItem.email
            })
        
            this.props.vehicleInfo.map(vehicleItem=>{ //vehicle state
                if(userItem.roles){
                    this.state.initConfVehicle.push(vehicleItem)
                    this.setState({
                        ownerTransactionEmail : vehicleItem.ownerTransactionKey,
                        secondPartyEmail : vehicleItem.additionalINFO.buyerKey,
                        initConfVehicle : this.state.initConfVehicle
                    })
                }
            else if(!userItem.roles){
               if((userItem.email === vehicleItem.ownerTransactionKey) || (userItem.email === vehicleItem.additionalINFO.buyerKey  ) ){
                    this.state.initConfVehicle.push(vehicleItem)
                    this.setState({
                        ownerTransactionEmail : vehicleItem.ownerTransactionKey,
                        secondPartyEmail : vehicleItem.additionalINFO.buyerKey,
                        initConfVehicle : this.state.initConfVehicle
                    })
                }
            }
            })
            })    
    }

   
    render()
    {
        return(<>
            
            
            {/* {console.log(this.state.initConfVehicle)}
         */}
          <div style={{border : "4px dotted green"}}> 
                <h2>Log in email: {this.state.signInEmail}</h2>
               <h3>Owner Transaction email: {this.state.ownerTransactionEmail}</h3>
               <h3>second party email: {this.state.secondPartyEmail}  </h3>
               <h2>  <Link to="/">Home</Link></h2> 
                     <h2> <Link to="/auth">Auth page</Link></h2> 
                     <h2> <Link to="/vehicleInfoForm">add new vehicle</Link></h2> 
               </div>
            

<table className="table table-hover"> 
           <thead>
            <tr>
                   <th>ID</th>
                   <th>Make</th>
                   <th>Model</th>
                   <th>year</th>
                   <th>license-Plate</th>
                   <th>Buyer id</th>
                   <th>owner Transaction </th>
                   <th>more information</th>
           </tr>
           </thead> 
 
          

           {this.state.initConfVehicle.map((item , index)=>{
                return <ConfirmationPage key={item._id} initConf={item} index={index+1} />
                })} 


               </table>

                {this.state.userTransactions.map((data , index)=>
                    {
                        return <div>{data}</div>;



                    })} 

            
            
            </>)
    }
        // console.log(cookie.load("isLoggedIn"))
    

    }
  

