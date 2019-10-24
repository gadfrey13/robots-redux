import React from 'react';

const Card = ({name,email,id,phone,address}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set3&200x200`} alt="robots"/>
            <div>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone Number: {phone}</p>
                <p>Address: {address.street}, {address.city}</p>
            </div>
        </div>
    )
}

export default Card;

