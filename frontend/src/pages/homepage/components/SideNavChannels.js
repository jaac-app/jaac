import React from "react";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from "components/IconButton";

const SideNavChannels = () => {
    const channelList = ["JAAC App", "Webstore"]

    const selectNewChannel = (channelIndx) => {
        console.log(channelIndx);
    }

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
                                <IconButton innerText={channel} onClickHandler={()=>selectNewChannel(indx)}/>
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavChannels;