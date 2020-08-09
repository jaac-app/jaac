import React from "react";

import SideNavUserOptions from "../components/SideNavUserOptions";
import SideNavChannels from "../components/SideNavChannels";
import SideNavMessages from "../components/SideNavMessages";
import IconButton from "../../../components/IconButton";

// Component to show SideNavbar
const SideNavbar = ({channelSelectHandler}) => {
    return (
        <aside className="others open" id="others">
            <div className="side-bar-top-style panel">
                <section>
                    <div className="sideNavSectionHeadingDiv main-search">
                    <input type="text" id="mainSearchInput" className="main-search-input" placeholder="Search" />
                        <IconButton icon="search" />
                    </div>
                </section>
                <section>
                    <div className="sideNavSectionHeadingDiv create-meeting">
                        <IconButton  innerText="Create meeting" /> <IconButton icon="videocam"/>
                    </div>
                </section>
                {/* Components for sideNavbar */}
                <SideNavUserOptions />
                <SideNavChannels channelSelectHandler={channelSelectHandler}/>
                <SideNavMessages />
            </div>
            <button className="toggle-others" 
                onClick={
                    () => {
                        const domOthers = document.getElementById("others");
                        domOthers.classList.toggle('open');
                    }
                }
            >
                <span>chats</span>
            </button>
        </aside>
    )
}

export default SideNavbar;