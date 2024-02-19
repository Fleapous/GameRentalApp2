import React, {useContext, useState} from "react";
import {AuthContext} from "../../components/AuthProvider";

export const Login = () => {
    const setIsLoggedIn = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/login?useCookies=true&useSessionCookies=true`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });
            
            if (!response.ok) {
                console.log('Login has warnings/error:');
            }
            
            console.log('Login successful:');
            window.location.href = '/' // reload the page in order to check for auth

        } catch (error) {
            console.error('Login failed:', error.message);
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
