import akele from "img/akele.jpg";
import akon from "img/akon.jpg";
import {addNewConversation} from "./channelConversations";

const channelDetails = {
    0: {
        imgURL: akele,
        name: "JAAC app", 
        createdAt: "June 16, 2020", 
        // send group members userId in an array
        membersIDs: [1, 2, 3, 4]
    },
    1: {
        imgURL: akon,
        name: "Webstore app", 
        createdAt: "June 20, 2020", 
        // send group members userId in an array
        membersIDs: [1, 2, 3, 4]
    }
}

const getChannelDetailsByID = ID => {
    return channelDetails[ID];
}

export const addNewChannel = newChannelName => {
    const newChannelDetails = {
        imgURL: akon,
        name: newChannelName, 
        createdAt: "June 20, 2020", 
        // send group members userId in an array
        membersIDs: [1, 2, 3, 4]
    }
    const key = Object.keys(channelDetails).length;
    channelDetails[key] = newChannelDetails;

    // add dummy conversation for this channel
    addNewConversation();
    console.log(channelDetails);
}

export default getChannelDetailsByID;