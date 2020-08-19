import React from "react";
import getChannelDetailsByID from "../../../storeData/channelDetails";
import getChannelMessagesByID from "../../../storeData/channelConversations";
import getUserById from "../../../storeData/user";

// Component to show channel details and channel messages
const GroupConversation = ({selectedChannelID}) => {

    const channelDetails = getChannelDetailsByID(selectedChannelID);
    const channelMessages = getChannelMessagesByID(selectedChannelID);
  
    return (
        <section className="section" id="groupConversationsContainer">
            <div className="img-border">
                <img src={channelDetails.imgURL} />
            </div>
            <h2>{channelDetails.name}</h2>
            <h3>created at: {channelDetails.createdAt}</h3>
            <div className="grp-chnl-prsn-shw-img">
                {
                    channelDetails.membersIDs.map((memberID, indx) => {
                        const dpUrl = getUserById(memberID).profilePicURL;
                        return (
                            <span key={indx}>
                                <img src={dpUrl} />
                            </span>
                        )
                    })
                }
            </div>

            {/* Div to show the channel messages */}
            <div>
                {
                channelMessages.map((message, indx) => {
                    const userData = getUserById(message.senderID);
                    const name = userData.name;
                    const dpUrl = userData.profilePicURL;
                    return (
                        <div key={indx} className="left-msg"> 
                            <div className="left-message-container">
                            <div className="message-details">
                                <img src={dpUrl} />
                                <h4>{name}</h4>
                                <span className="time">{message.time}</span>
                            </div>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )}
                )
                }    
            </div>
            <div>
                <input className="msg-btn" type="text" placeholder="Type Message"></input>
                <button className="send-btn" type="button">Send</button>
            </div>
        </section>
    )
}

export default GroupConversation;