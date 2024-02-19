import React from "react";


const BackGround = ({imgUrl, children}) => {

    const BackGroundStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        width: '100%',
        position: "relative",
        borderRadius: `20px`,
        marginBottom: "20px"
}
    return (
        <div style={BackGroundStyle}>
            {children}
        </div>
    );
}

export default BackGround;