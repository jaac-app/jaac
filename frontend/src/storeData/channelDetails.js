import akele from "img/akele.jpg";
import akon from "img/akon.jpg";
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

export default getChannelDetailsByID;