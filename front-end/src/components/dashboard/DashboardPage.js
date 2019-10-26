import React, { Component } from 'react'
import ConfirmationPage from '../confirmations/ConfirmationPage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthPage from './NewTransactionPage';
import {Link} from "react-router-dom"
export default class DashboardPage extends Component {
    state ={
        signInEmail : null,
        ownerTransactionEmail : null,
        secondPartyEmail : null,
        initConfVehicle :[],
        userTransactions:[]
    }
    // componentDidMount=()=>{
    //     console.log(this.props.location.state)
    //     this.setState({userTransactions:this.props.location.state})

    // //   this.validationFunction()
    // }
    constructor(props)
    {
        
        super(props);
        // this.setState({userTransactions:this.props.location.state})
     

    }
    componentWillMount()
    {
        this.setState({initConfVehicle:this.props.location.state})


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

    render() {
        // console.log("initConfVehicle: ",this.state.initConfVehicle);
        return (
        <>
         {/* <div style={{border : "4px dotted green"}}> 
                <h2>Log in email: {this.state.signInEmail}</h2>
               <h3>Owner Transaction email: {this.state.ownerTransactionEmail}</h3>
               <h3>second party email: {this.state.secondPartyEmail}  </h3>
                     
                   <h2>  <Link to="/">Home</Link></h2>
                    <h2> <Link to="/auth">Auth page</Link></h2>
                    <h2> <Link to="/vehicleInfoForm">add new vehicle</Link></h2>
                 <AuthPage vehicleInfo={this.props.vehicleInfo} userInfo = {this.props.userInfo} ></AuthPage> 
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
                    <th>sss</th>
            </tr>
            </thead> 
  
           

            {this.state.initConfVehicle.map(item=>{
                return <ConfirmationPage key={item.id} initConf={item} selectedDetails={this.props.selectedDetails}></ConfirmationPage> 
                })}
         


                </table>
                {JSON.stringify(this.propslocation.state)}
                {console.log(this.props.location.state)}
                </div> */}

<table className="table table-hover"> 
{/* <Route path="/vehicleInfoForm" component={VehicleInfoForm}></Route> */}
           <Link to={{pathname:'/vehicleInfoForm' , state:this.props.match.params.id}}>Vehicle Form INFO.</Link>
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


             



                {/* {this.state.userTransactions.map((data , index)=>
                    {
                        return <div>{data}</div>;



                    })} */}



            </>
        )
    }
}
