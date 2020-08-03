import React from "react";
import FontAwesomeIcon from "components/FontAwesomeIcon";
//to create left picture and rihgt text
const IconButton = ({innerText, buttonDp}) => {
    return (
        <button type="button" className="channelBtn">
            <span><FontAwesomeIcon className="" /></span>
            <span>{innerText}</span>
        </button>
    )
}

export default IconButton;