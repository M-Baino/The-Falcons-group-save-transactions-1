import React, { Component } from 'react'

export default class DetailsPage extends Component {
    render() {
        console.log(this.props.selectedObject);
        if(this.props.selectedObject === null){
            return <></>
        }
        else if (this.props.selectedObject !== null){
        return (
            <>
                {JSON.stringify( this.props.selectedObject)}
            </>
        )
        }
    
    }
}
