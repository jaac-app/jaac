import React, {useState} from "react";
import Header from "components/Header";
//check line no 4
// import "../css/homepage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Section imports
import SideNavbar from "./sections/SideNavbar";
import GroupConversation from "./sections/GroupConversation";

const Homepage = () => {
    
    const [selectedChannelID, setSelectedChannelID] = useState(0);

    const channelSelectHandler = (indx) => {
        setSelectedChannelID(indx);
    }

    return (
        <>
            <div className="layout">
                <Header/>
                
                <SideNavbar channelSelectHandler={channelSelectHandler}/>
                <main className="conversation">
                    <GroupConversation selectedChannelID={selectedChannelID}/>
                </main>
            </div>
        </>
    )
}
export default Homepage;