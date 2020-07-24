import getUserById from "/js/models/user.js";
import getChannelMessagesByID from "/js/models/channelConversations.js";
import getChannelDetailsByID from "/js/models/channelDetails.js";
export default class groupConversation{

    constructor(currentChannelID){
        const details = getChannelDetailsByID(currentChannelID);
        this.picture =  details.imgURL;
        this.name = details.name;
        this.creationDate = details.createdAt;
        this.memberIds = details.membersIDs;
        this.currentChannelID = currentChannelID;
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <section class="section">
                <div class="img-border">
                    <img src="${this.picture}">
                </div>
                <h2>${this.name}</h2>
                <h3>created at: ${this.creationDate}</h3>
                <div class="group-members-inline">
                    ${this.getMembersHTML()}
                </div> 
                <div>
                    ${this.getMessagesByIDHTML()}
                </div>
            </section>
        `
    }
    //
    getMembersHTML(){
        const members =  this.memberIds.map(memberID=>{
            const userData = getUserById(memberID);
            const dpUrl = userData.profilePicURL;
            return `<img src="${dpUrl}">`
        })

        return members.join('');
    }

    getMessagesByIDHTML(){

        const messages = getChannelMessagesByID(this.currentChannelID);
        console.log(messages)
        return messages.map(message=>{
            const userData = getUserById(message.senderID);
            const name = userData.name;
            const dpUrl = userData.profilePicURL;
            return `
                <div class="left-msg"> 
                    <div class="left-message-container">
                       <div class="message-details">
                        <img src="${dpUrl}">
                        <h4>${name}</h4>
                        <span class="time">${message.time}</span>
                       </div>
                        <p>${message.text}</p>
                    </div>
                </div>
            `
        }).join('')
    }
}
