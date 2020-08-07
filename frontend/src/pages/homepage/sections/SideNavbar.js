import React from "react";

import SideNavUserOptions from "../components/SideNavUserOptions";
import SideNavChannels from "../components/SideNavChannels";
import SideNavMessages from "../components/SideNavMessages";

const SideNavbar = ({channelSelectHandler}) => {
    return (
        <aside className="others open" id="others">
            <div className="side-bar-top-style panel">
                <section>
                    <div className="sideNavSectionHeadingDiv main-search">
                    <input type="text" id="mainSearchInput" className="main-search-input" placeholder="Search" />
                        <button type="button" id="mainSearchBtn"><i className="fas fa-search"></i></button>
                    </div>
                </section>
                <section>
                    <div className="sideNavSectionHeadingDiv create-meeting">
                        <span>Create meeting</span>
                        <button type="button" id="createMeetingBtn"> <i className="fas fa-video"></i></button>
                    </div>
                </section>
                <SideNavUserOptions/>
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