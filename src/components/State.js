import React from 'react'
import Attendees from './Attendees';
import RegistrationForm from './RegistrationForm';


class Component extends React.Component{
    constructor(){
        super()
        this.state = {
            attendees : []
        }

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
     
      return(<>
          <div>
            <RegistrationForm addAttendeeCB={this.addAttendee}/>
            {this.state.attendees.map(person => <Attendees person={person}/>)}
          </div>
          <div>
              {
                 beginners.map(person => <Attendees person={person}/>)
              }
          </div>
     </> )
  }
}
export default Component