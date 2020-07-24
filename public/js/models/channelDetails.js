const channelDetails = {
    0: {
        imgURL: "./img/akele.jpg",
        name: "JAAC app", 
        createdAt: "June 16, 2020", 
        // send group members userId in an array
        membersIDs: [1, 2, 3, 4]
    },
    1: {
        imgURL: "./img/akele.jpg",
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