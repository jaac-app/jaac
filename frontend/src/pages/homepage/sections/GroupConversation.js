import React from "react";
import getChannelDetailsByID from "../../../storeData/channelDetails";
import getChannelMessagesByID from "../../../storeData/channelConversations";
import getUserById from "../../../storeData/user";

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
            {/* {/* <div className="group-members-inline">
                ${this.getMembersHTML()}
            </div>  */}
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
        </section>
    )
}

export default GroupConversation;