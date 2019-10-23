import React, { Component } from 'react'
import ConfirmationPage from '../confirmations/ConfirmationPage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DashboardPage extends Component {
    state ={
        email : null,
        initConfVehicle :[]
    }
    componentDidMount(){
        this.props.userInfo.map(userItem=>{ //user state
            this.props.vehicleInfo.map(vehicleItem=>{ //vehicle state
                console.log('additionalINFO', vehicleItem.additionalINFO[0].buyerKey)
                if(userItem.email === vehicleItem.ownerTransactionKey){
                    // console.log(userItem.email);
                    this.state.initConfVehicle.push(vehicleItem)
                    this.setState({
                        email : vehicleItem.ownerTransactionKey,
                        initConfVehicle : this.state.initConfVehicle
                    })
                }
            })
            })    
            
    }
    render() {
        return (
            <>
            {/* <div style={{border : "4px dotted green"}}> */}
               <h2>Owner Transaction email: {this.state.email}</h2>
                   <table className="table table-hover">
            
            <thead>
                        <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>year</th>
                    <th>license-Plate</th>
                    <th>Buyer id</th>
                    <th>sss</th>
            </tr>
            </thead>
            {/* </thead> */}

           {/* <tbody> */}
           

            {this.state.initConfVehicle.map(item=>{
                return <ConfirmationPage key={item.id} initConf={item}></ConfirmationPage> 
                })}
         

                {/* </tbody> */}

                </table>
            {/* </div> */}
            </>
        )
    }
}
