import React from "react";
// import FontAwesomeIcon from "components/FontAwesomeIcon";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from 'components/IconButton'
const SideNavUserOptions = () => {
    return (
        <section>
            {/* <h1><FontAwesomeIcon className="fas fa-user" innerText="My Profile" /></h1>
            <ul>
                <li><FontAwesomeIcon  className="fas fa-cog" innerText="My Settings"/> </li>
                <li><FontAwesomeIcon className="far fa-sticky-note" innerText="My Notes"/> </li>
            </ul> */}
            <h1><IconButton icon="fas fa-user" innerText="My Profile" /></h1>
            <ul>
                <li key={1}><IconButton icon="fas fa-cog" innerText="Settings" /></li>
                <li key={2}><IconButton icon="far fa-sticky-note" innerText="My Notes" onClickHandler={null}/></li>
            </ul>
        </section>
    )
}

export default SideNavUserOptions;