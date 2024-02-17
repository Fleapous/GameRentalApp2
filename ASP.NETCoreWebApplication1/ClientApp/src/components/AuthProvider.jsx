import React, {useEffect, useState} from "react";
import {sync} from "rimraf";

const AuthContext = React.createContext();
export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(url, options){
            const response = await fetch(url, options);
            
            //checking the status code
            if(response.status === 200){ // we are valid
                console.log("Authorized");
                let data = await response.json(); //not doing anything with data fr now
                setIsLoggedIn(true);
                return response;
            }
            else if (response.status === 401) { // we are not logged in
                console.log("Unauthorized");
                return response;
            } else { // error 
                console.log("error");
            }
        }
        
        fetchData("pingauth", {
            method: "GET",
        }).then(r => setLoading(false));
        
    }, []);
    
    
    
    
}