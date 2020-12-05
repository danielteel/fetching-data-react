import React from 'react';
import styled from 'styled-components';


export default class RegistrationForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            firstName: '',
            lastName: ''
            //TODO: add states for email, shirt size, level (beginner/intermediate/expert)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const first = event.target.firstName.value;
        const last = event.target.lastName.value;

        this.setState({firstName: '', lastName: ''});
        //this.setState({lastName: ''}) I made the changes happen on one line (above)
        
        this.props.addAttendeeCB(first, last);
    }

    firstNameOnChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameOnChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    //TODO: add more xxxxOnChange methods to handle the new form inputs for email shirt size and all that (kind of the same format as the two methods above)


    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <h2>Register Attendee</h2>
                    <label>First Name:</label>
                    <input onChange={this.firstNameOnChange} value={this.state.firstName} type="text" id="firstName"/>
                    <label>Last Name:</label>
                    <input onChange={this.lastNameOnChange} value={this.state.lastName} type="text" id="lastName"/>

                    {/*TODO: add form inputs for email, shirt size, level (beginner/intermediate/expert*/}

                    <button>Register</button>
                </form>
                );
    }


}