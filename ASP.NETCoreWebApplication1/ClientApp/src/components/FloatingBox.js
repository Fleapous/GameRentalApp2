import React from "react";

const FloatingBox = ({ width, height, color, borderRad, padding, children, position, rotation, positioning}) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`,
        borderRadius: `${borderRad}px`,
        padding: `${padding}px`,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position: `${positioning}` || "relative",
        top: position.top || 0,
        left: position.left || 0,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`
    };

    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};

export default FloatingBox;
