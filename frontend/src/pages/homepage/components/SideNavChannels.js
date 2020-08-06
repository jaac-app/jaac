import React from "react";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from "components/IconButton";

const SideNavChannels = ({channelSelectHandler}) => {
    const channelList = ["JAAC App", "Webstore"]

    return (
        <section>
            <div class="sideNavSectionHeadingDiv">
                <span>Group Channels</span>
                <button type="button" id="createGroupChannelBtn">
                    <FontAwesomeIcon icon={["fas", "fa-plus"]}/>
                </button>
            </div>
            <ul>

                {
                    channelList.map((channel, indx) => {
                        return (
                            <li key={indx}>
                                <IconButton innerText={channel} onClickHandler={()=>channelSelectHandler(indx)}/>
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavChannels;