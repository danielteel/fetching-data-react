import React from 'react';
import styled from 'styled-components';

import Attendees from './Attendees';
import RegistrationForm from './RegistrationForm';


const Container=styled.div`
    display: flex;
`;

const AttendeesContainer=styled.div`
    margin: 3em;
`;

const RegistrationContainer=styled.div`
    flex-grow: 1;
    margin: 3em;
`;


class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            attendees : []
        };

        this.addAttendee=this.addAttendee.bind(this);
    }


    async componentDidMount(){
            const response = await fetch('http://localhost:3000/attendees');
            const attendees = await response.json();
            this.setState({attendees : attendees})
    }

    async addAttendee(firstName, lastName){
            const newAttendee = {
                id: 0,
                firstName: firstName,
                lastName: lastName,
                email: "Jim@jim.com",
                shirt:"XS",
                skillLevel:"expert"
                }

            const response = await fetch('http://localhost:3000/attendees',
                                            {
                                                method:"POST",
                                                body: JSON.stringify(newAttendee),
                                                headers:{
                                                    "Content-Type":"application/json",
                                                    "Accept":"application/json"  
                                                }
                                            }
                                        )
            const newPerson=await response.json();
            
            this.setState({attendees : [...this.state.attendees, newPerson]})
    }

    render(){
        let beginners=this.state.attendees.filter(person => person.skillLevel === 'beginner');
        let intermediate=this.state.attendees.filter(person => person.skillLevel === 'intermediate');
        let expert=this.state.attendees.filter(person => person.skillLevel === 'expert');
        
        return ( 
                <Container>
                    <RegistrationContainer>
                        <RegistrationForm addAttendeeCB={this.addAttendee}/>
                    </RegistrationContainer>
                    <AttendeesContainer>
                        <h2>Attendees</h2>
                        <h3>Beginner</h3>
                        {beginners.map(person => <Attendees person={person}/>)}
                        <h3>Intermediate</h3>
                        {intermediate.map(person => <Attendees person={person}/>)}
                        <h3>Expert</h3>
                        {expert.map(person => <Attendees person={person}/>)}
                    </AttendeesContainer>
                </Container>
              );
    }
}
export default Component 