import React, {useEffect, useState} from "react";

export const AuthContext = React.createContext();
export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(url, options){
            try {
                const response = await fetch(url, options);

                // Check the status code
                if (response.status === 200) {
                    // User is authenticated
                    console.log(response.status);
                    setIsLoggedIn(true);
                } else if (response.status === 401) {
                    // User is not authenticated
                    console.log("Unauthorized");
                } else {
                    // Error
                    console.log("Error");
                }

                // Set loading to false after fetching data
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Set loading to false if an error occurs
                setLoading(false);
            }
        }
        
        fetchData("auth", {
            method: "GET",
        }).then(r => setLoading(false));
        
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Render the AuthContext provider if authentication status is determined
    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}