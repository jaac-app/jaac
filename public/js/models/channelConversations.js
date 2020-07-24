const channelConversations = {
        0: [
            {
                senderID: 1,
                time: '08:00 pm',
                text: 'Hello'
            },
            {
                
                senderID: 2,
                time: '09:00 pm',
                text: 'Hi'
            },
            {
                senderID: 3,
                time: '09:01 pm',
                text: 'Hello'
            },
            {
                senderID: 4,
                time: '09:30 pm',
                text: 'Hi guys'
            }

        ],
        1:[
            {
                senderID: 1,
                time: '08:00 pm',
                text: 'yay'
            },
            {
                
                senderID: 2,
                time: '09:00 pm',
                text: 'hyeeeeee'
            },
            {
                senderID: 3,
                time: '09:01 pm',
                text: 'Hello'
            },
            {
                senderID: 4,
                time: '09:30 pm',
                text: 'Hi guys'
            }

        ],
    }

const getChannelMessagesByID = (channelID) =>{
    console.log(channelID)
    return channelConversations[channelID];
}
export default getChannelMessagesByID;