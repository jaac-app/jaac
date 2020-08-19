import React, { useState } from "react";
import IconButton from "components/IconButton";
import {addNewChannel} from "../../../storeData/channelDetails";
const SideNavChannels = ({channelSelectHandler}) => {
    

    const [channelList, setChannelList] = useState(["JAAC App", "Webstore"])
    const channelAddHandler = () => {
        let newChannel= prompt('Enter new Channel name');
        newChannel = newChannel == "" ? "new Channel" : newChannel;
        const newChannelList = [...channelList];
        newChannelList.push(newChannel);
        setChannelList( newChannelList)

        addNewChannel(newChannel);
    }
    return (
    
        <section>
            <div className="sideNavSectionHeadingDiv">
                <span>Group Channels</span>
                <button type="button" onClick={channelAddHandler}>
                    <span className="material-icons">control_point</span>
                    
                </button>
            </div>
            <ul>

                {
                    channelList.map((channel, indx) => {
                        return (
                            <li key={indx}>
                                <IconButton 
                                    icon="group"
                                    innerText={channel} 
                                    onClickHandler={()=>channelSelectHandler(indx)}
                                />
                            </li>
                        )     
                    })
                }
            </ul>
        </section>
    )
}

export default SideNavChannels;