import { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState("");
    const [position, setPosition] = useState("Junior Developer");

    const person = {
        name: "Syrgak Tabyldiev",
        company: "Megacom",
        experience: "2 years",
        location: "Bishkek",
        hobby: "Swimming"
    };

    const promote = () => {
        setMessage("Position changed!");
        setPosition("Senior developer");
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {position}</p>
            <p>Company: {person.company}</p>
            <p>Experience: {person.experience}</p>
            <p>Location: {person.location}</p>
            <p>Hobby: {person.hobby}</p>
            {message && <p>{message}</p>}
            <button onClick={promote}>Promote</button>

        </div>
    );
};

export default PersonInfo;
