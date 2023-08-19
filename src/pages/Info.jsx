import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";


function Info() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const AddInfos = {
            name: name,
            surname: surname,
        };
        fetch('http://127.0.0.1:8000/api/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(AddInfos)
        })
            .then(response => response.json())

    }

    return (
        <>
            <div className="container">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="login-input-title">

                        <div className="user_name">
                            <label htmlFor="name">Enter your name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                id="info-name"
                                name="name"
                                value={name}
                                type="text"
                                placeholder="Enter your name..."
                            />
                        </div>
                    </div>

                    <div className="login-input-title">

                        <div className="user_surname">
                            <label htmlFor="surname">Enter your surname</label>
                            <input
                                onChange={(e) => setSurname(e.target.value)}
                                id="surname"
                                name="surname"
                                value={surname}
                                type="text"
                                placeholder="Enter your surname..."
                            />
                        </div>
                        </div>
                    <div className="blue_btn">
                        <button type='submit'><p>Sign Up</p></button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Info;
