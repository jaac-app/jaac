import React from "react";

const textStyles = {
    margin: "0 0.5em"
}
//to create left picture and rihgt text
const IconButton = ({innerText, icon, onClickHandler}) => {
    return (
        <button
            type="button" 
            className="channelBtn" 
            onClick={onClickHandler}
            >
            <span className="material-icons">{icon}</span>
            <span style={textStyles}>
                {innerText}
            </span>
        </button>
    )
}

export default IconButton;