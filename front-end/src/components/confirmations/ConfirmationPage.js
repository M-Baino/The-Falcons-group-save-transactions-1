import React, { Component } from 'react'
import DetailsPage from './DetailsPage';

export default class ConfirmationPage extends Component {
    state ={
        selectedObject : null
    }
    selectHandler=(event)=>{
        this.setState({
            selectedObject : event
        })
    }
    render() {
        return (
            <>
             
            <tbody>
              
            <tr onClick={this.selectHandler.bind(this,this.props.initConf)}>
            <td >    {this.props.initConf.id}  </td>           
            <td>    {this.props.initConf.make }  </td>
            <td>     {this.props.initConf.model} </td>
             <td>   {this.props.initConf.year}</td>
            <td>    {this.props.initConf.licensePlate }</td>
             <td>   {this.props.initConf.additionalINFO[0].buyerKey}</td>
            <td >
                <a href="#" style={{textDecoration:"none", border:"none" , }}>
                        More information
                </a>
            </td>
             </tr>
            
               </tbody>
          
               <DetailsPage selectedObject={this.state.selectedObject}></DetailsPage>
            
            </>
        )
    }
}
