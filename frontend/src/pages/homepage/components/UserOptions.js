import React from "react";
import FontAwesomeIcon from "components/FontAwesomeIcon";

const SideNavUserOptions = () => {
    return (
        <section>
            <h1><FontAwesomeIcon className="fas fa-user" innerText="My Profile" /></h1>
            <ul>
                <li><FontAwesomeIcon  className="fas fa-cog"></FontAwesomeIcon> Settings </li>
                <li><FontAwesomeIcon className="far fa-sticky-note"></FontAwesomeIcon> My Notes </li>
            </ul>
        </section>
    )
}

export default SideNavUserOptions;