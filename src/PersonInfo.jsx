// import React, { useState } from 'react';
const PersonInfo = () => {
    const [position, setPosition] = useState("Junior Developer");

    const person = {
        name: "Syrgak Tabyldiev",
        position,
        company: "Ala-Too University",
        details: [
            "Passionate about learning modern web technologies.",
            "Skilled in Java, Python, and Graphic Design.",
            "Ambition to excel in the tech industry.",
        ],
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p><strong>Position:</strong> {person.position}</p>
            <p><strong>Company:</strong> {person.company}</p>
            <ul>
                {person.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <button onClick={() => setPosition("Mid-Level Developer")}>Promote</button>
        </div>
    );
};
