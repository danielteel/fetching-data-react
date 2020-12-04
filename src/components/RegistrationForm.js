import React from 'react';
import styled from 'styled-components';


export default class RegistrationForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            firstName: '',
            lastName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var first = event.target.firstName.value;
        var last = event.target.lastName.value;
        this.setState({firstName: ''})
        this.setState({lastName: ''})
        
        this.props.addAttendeeCB(first, last);
    }

    firstNameOnChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameOnChange = (event) => {
        this.setState({lastName: event.target.value});
    }


    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <h1>Register Attendee</h1>
                    <label>First Name:</label>
                    <input onChange={this.firstNameOnChange} value={this.state.firstName} type="text" id="firstName"/>
                    <label>Last Name:</label>
                    <input onChange={this.lastNameOnChange} value={this.state.lastName} type="text" id="lastName"/>
                    <button>Register</button>
                </form>
                );
    }


}