import React from "react";
import IconButton from 'components/IconButton'
const SideNavUserOptions = () => {
    return (
        <section>
            <h1><IconButton icon="account_circle" innerText="My Profile" /></h1>
            <ul>
                <li key={1}><IconButton icon="account_circle" innerText="Settings" /></li>
                <li key={2}><IconButton icon="account_circle" innerText="My Notes" onClickHandler={null}/></li>
            </ul>
        </section>
    )
}

export default SideNavUserOptions;