import React from "react";
import FontAwesomeIcon from "components/FontAwesomeIcon";
import IconButton from "components/IconButton";

const SideNavChannels = () => {
    const channelList = ["JAAC App", "Webstore"]
    return (
        <section>
            <div class="sideNavSectionHeadingDiv">
                <span>Group Channels</span>
                <button type="button" id="createGroupChannelBtn">
                    <FontAwesomeIcon className="fas fa-plus" />
                </button>
            </div>
            <ul>

                {
                    channelList.map(channel => {
                        return (
                            <li>
                                <IconButton innerText={channel} />
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavChannels;