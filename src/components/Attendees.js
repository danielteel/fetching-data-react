import React from 'react'

function Attendees({person: {id, firstName, lastName, email, shirt, skillLevel}}){
    return(
        <h1>
         First Name: {firstName} Last Name: {lastName} email: {email} shirt: {shirt} skillLevel: {skillLevel}
        </h1>
    )
}

export default Attendees
