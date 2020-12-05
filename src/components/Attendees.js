import React from 'react';

export default function Attendees({person: {firstName, lastName}}){
    return(
        <h4>{firstName} {lastName}</h4>
    );
}