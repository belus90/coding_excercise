import React from "react";
import PopupItem from "./PopupItem";

const PopupList = ({options}) => {

    const popupOptions = options.map(option => {						
        return (														
        <PopupItem key = {option.id} name = {option.name} />			
        );																	
    });

    return(
        <>
        {popupOptions}
        </>
    )
}


export default PopupList;