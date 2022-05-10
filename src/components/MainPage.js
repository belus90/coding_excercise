import React, {useState} from "react";
import Element from "./Element";
import PopupList from "./PopupList";

const MainPage = () => {
        const options =
        [
            {
            id: 1,
            name: "BLUNT",
            },
            {
            id: 2,
            name: "BURN",
            },
            {
            id: 3,
            name: "FROST",
            },
            {
            id: 4,
            name: "GUN SHOT",
            },
            {
            id: 5,
            name: "LACERATION",
            },
            {
            id: 6,
            name: "RTC",
                },
            {
            id: 7,
            name: "STAB",
            },
            
        ]
        

    const [popUpOpen, setPopUpOpen] = useState(true);
    
    return (
    
        <>
        <Element />
        <PopupList  options = {options} />
        </>

    );
}

export default MainPage;
