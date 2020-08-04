import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FontAwesomeIcon from "components/FontAwesomeIcon";
//to create left picture and rihgt text
const IconButton = ({innerText, icon, onClickHandler}) => {
    return (
        <button type="button" className="channelBtn" onClick={onClickHandler}>
            <span><FontAwesomeIcon icon={icon} /></span>
            <span>{innerText}</span>
        </button>
    )
}

export default IconButton;