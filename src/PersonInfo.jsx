// import React, { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState("");

    const person = {
        // Same as above
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
            {message && <p>{message}</p>}
            <button onClick={() => setMessage("You  clicked the button!")}>Promote</button>

        </div>
    );
};
