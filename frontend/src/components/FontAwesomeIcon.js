import React from "react";

const FontAwesomeIcon = ({className, innerText=""}) => {
    return (
        <i className={className}>{innerText}</i>
    )
}
export default FontAwesomeIcon;