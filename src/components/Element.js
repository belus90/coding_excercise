import React from "react";


const Element = () => {

    const handleClick = () => {
        console.log("szeretem a vivit")
    }

    return (
    
        <button className="button" onClick={handleClick}>MECHANISM</button>

    );
}

export default Element;

