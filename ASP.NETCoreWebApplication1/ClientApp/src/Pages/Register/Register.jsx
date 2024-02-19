import React, {useContext, useState} from "react";
import {AuthContext} from "../../components/AuthProvider";

export const Register = () => {
    const {setLoggedIn} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const responseData = await response.json();
            console.log('Registration successful:', responseData);
            setLoggedIn(true);
            
        } catch (error) {
            console.error('Registration failed:', error.message);
            // Handle registration error (e.g., display error message)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password"){
            setPassword(value)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}