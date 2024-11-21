import React from 'react';

const PersonInfo = () => {
    const person = {
        name: "Syrgak Tabyldiev",
        position: "Junior Developer",
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
        </div>
    );
};

export default PersonInfo;
