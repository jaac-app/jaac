import React, {useState} from "react";
import Header from "components/Header";
// Section imports
import SideNavbar from "./sections/SideNavbar";
import GroupConversation from "./sections/GroupConversation";

// Homepage component
const Homepage = () => {
    
    const [selectedChannelID, setSelectedChannelID] = useState(0);

    const channelSelectHandler = (indx) => {
        // update selectedChannel
        setSelectedChannelID(indx);

        // toggle
        const domOthers = document.getElementById("others");
        domOthers.classList.toggle('open');
    }

    // Homepage is made of 2 sections: SideNav, GroupConverstion
    return (
        <>
            <div className="layout">
                <Header/>
                {/*  Side nav has channel select button, which updates
                messages in conversation section */}
                <SideNavbar channelSelectHandler={channelSelectHandler}/>
                <main className="conversation">
                    {/* It will show new messages */}
                    <GroupConversation selectedChannelID={selectedChannelID}/>
                </main>
            </div>
        </>
    )
}
export default Homepage;