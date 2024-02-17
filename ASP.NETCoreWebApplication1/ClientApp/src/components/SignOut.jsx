import React, {useContext} from "react";
import {Await, useNavigate} from "react-router-dom";

export const SignOut = () => {
    const navigate = useNavigate();
    const handleSubmit = (element) => {
        element.preventDefault();
        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""

        })
            .then((data) => {
                if (data.ok) {
                    window.location.href = '/'
                    
                }
                else { }


            })
            .catch((error) => {
                console.error(error);
            })

    };
    return(
        <a href="#" onClick={handleSubmit}>Sign Out</a>
    );
}