import React from "react";
// import FontAwesomeIcon from "components/FontAwesomeIcon";
import IconButton from "components/IconButton";

const SideNavMessages = () => {
    const receiverList = ["Jingke", "Aman", "Aurnab", "Carol"]
    return (
        <section>
            <div class="sideNavSectionHeadingDiv">
                <span>Direct Messages</span>
                <button type="button" id="createGroupChannelBtn">
                    {/* <FontAwesomeIcon className="fas fa-plus" /> */}
                </button>
            </div>
            <ul>
                {
                    receiverList.map(user => {
                        return (
                            <li>
                                <IconButton innerText={user} />
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavMessages;