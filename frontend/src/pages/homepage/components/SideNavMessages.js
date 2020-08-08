import React from "react";
// import FontAwesomeIcon from "components/FontAwesomeIcon";
import IconButton from "components/IconButton";

const SideNavMessages = () => {
    const receiverList = ["Jingke", "Aman", "Aurnab", "Carol"]
    return (
        <section>
            <div className="sideNavSectionHeadingDiv">
                <span>Direct Messages</span>
                <button type="button" id="createGroupChannelBtn">
                    <span className="material-icons">control_point</span>
                </button>
            </div>
            <ul>
                {
                    receiverList.map((user, indx) => {
                        return (
                            <li key={indx}>
                                <IconButton icon="account_circle" innerText={user} />
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavMessages;